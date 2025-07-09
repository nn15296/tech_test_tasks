import React from 'react';
import { useState } from 'react';

const AddTaskForm = ({ projects = [] }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    project: '',
    priority: 'medium',
    status: 'not_started',
    dueDate: ''
  });


  const handleChange = (field) => (e) => {
    setTaskData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Add New Task</h3>
      
      <div>
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Task Title *
          </label>
          <input
            type="text"
            value={taskData.title}
            onChange={handleChange('title')}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px'
            }}
            placeholder="Enter task title"
          />
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Description
          </label>
          <textarea
            value={taskData.description}
            onChange={handleChange('description')}
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              resize: 'vertical'
            }}
            placeholder="Enter task description"
          />
        </div>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Project
            </label>
            <select
              value={taskData.project}
              onChange={handleChange('project')}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="">No Project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Priority
            </label>
            <select
              value={taskData.priority}
              onChange={handleChange('priority')}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Due Date
          </label>
          <input
            type="date"
            value={taskData.dueDate}
            onChange={handleChange('dueDate')}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
        
        <button
          type="button"
          disabled={!taskData.title.trim()}
          style={{
            backgroundColor: taskData.title.trim() ? '#1976d2' : '#ccc',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: taskData.title.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>+</span>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;