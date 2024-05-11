package com.Springboot.TaskManager.service;
import com.Springboot.TaskManager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import com.Springboot.TaskManager.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        task.setName(taskDetails.getName());
        task.setDescription(taskDetails.getDescription());
        // Update other properties as needed

        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        taskRepository.delete(task);
    }
}
