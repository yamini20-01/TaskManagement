package com.Springboot.TaskManager.controller;

import com.Springboot.TaskManager.entity.User;
import com.Springboot.TaskManager.entity.UserRegistrationRequest;
import com.Springboot.TaskManager.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
@RequestMapping("/api")

public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    public UserController(UserService userService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest request) {
        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));
        userService.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Basic ")) {
            String credentials = new String(Base64.getDecoder().decode(authorizationHeader.substring(6)));
            String[] splitCredentials = credentials.split(":");
            String username = splitCredentials[0];
            String password = splitCredentials[1];
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(userDetails == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("UnAuthorized");
            }
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok(userDetails);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Basic Authentication required");
        }
    }


    @DeleteMapping("/users/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        // Logic to delete the user from the database
        userService.deleteUserByUsername(username);
        return ResponseEntity.ok("User deleted successfully");
    }



}

