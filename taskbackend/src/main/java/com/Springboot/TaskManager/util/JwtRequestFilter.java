package com.Springboot.TaskManager.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Base64;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        if (StringUtils.hasText(authorizationHeader) && authorizationHeader.startsWith("Basic ")) {
            String base64Credentials = authorizationHeader.substring(6);
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));

            String[] parts = credentials.split(":", 2);
            String username = parts[0];
            String password = parts[1];

            UserDetails userDetails = null;


            try {
                userDetails = userDetailsService.loadUserByUsername(username);
            } catch (UsernameNotFoundException ex) {
                // User not found, return error response
                response.sendError(HttpServletResponse.SC_NOT_FOUND, "User not Authorized");
                return;
            }

            if (userDetails.getPassword().equals(password)) {
                Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        chain.doFilter(request, response);
    }
}

