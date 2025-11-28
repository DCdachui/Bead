<template>
  <TransitionGroup name="notification" tag="div" class="notification-container">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      :class="['notification', notification.type]"
    >
      <div class="notification-content">
        <span class="notification-icon">{{ getIcon(notification.type) }}</span>
        <span class="notification-message">{{ notification.message }}</span>
      </div>
      <button 
        class="notification-close" 
        @click="remove(notification.id)"
      >
        ×
      </button>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const notifications = ref([]);

const getIcon = (type) => {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || icons.info;
};

const add = (notification) => {
  notifications.value.push(notification);
  if (notification.duration > 0) {
    setTimeout(() => remove(notification.id), notification.duration);
  }
};

const remove = (id) => {
  notifications.value = notifications.value.filter(n => n.id !== id);
};

const handleNotification = (event) => {
  add(event.detail);
};

const handleRemove = (event) => {
  remove(event.detail.id);
};

onMounted(() => {
  window.addEventListener('notification', handleNotification);
  window.addEventListener('notification-remove', handleRemove);
});

onUnmounted(() => {
  window.removeEventListener('notification', handleNotification);
  window.removeEventListener('notification-remove', handleRemove);
});
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.notification {
  background: var(--bg-panel);
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  max-width: 400px;
  pointer-events: auto;
  border-left: 4px solid;
}

.notification.success {
  border-left-color: #10b981;
}

.notification.error {
  border-left-color: #ef4444;
}

.notification.warning {
  border-left-color: #f59e0b;
}

.notification.info {
  border-left-color: #3b82f6;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.notification-icon {
  font-size: 1.2rem;
}

.notification-message {
  flex: 1;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.notification-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  line-height: 1;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

