package com.Springboot.TaskManager.repository;

import com.Springboot.TaskManager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByIssuedDateAfter(String currentDate);
}
