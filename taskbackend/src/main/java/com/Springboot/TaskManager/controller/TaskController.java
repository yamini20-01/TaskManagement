package com.Springboot.TaskManager.controller;

import com.Springboot.TaskManager.entity.Task;
import com.Springboot.TaskManager.service.ResourceNotFoundException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Springboot.TaskManager.repository.TaskRepository;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllTasks() {

        return taskRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task savedTask = taskRepository.save(task);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        return ResponseEntity.ok(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        task.setName(taskDetails.getName());
        task.setDescription(taskDetails.getDescription());
        // Update other properties as needed

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        taskRepository.delete(task);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/upcoming")
    public List<Task> getUpcomingTasks() {
        // Get current date
        LocalDate currentDate = LocalDate.now();

        // Retrieve tasks with dates greater than the current date
        List<Task> upcomingTasks = taskRepository.findByIssuedDateAfter(currentDate.toString());

        return upcomingTasks;
    }


}
