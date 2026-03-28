<template>
  <section class="profile-form">
    <h2>Profile Form</h2>
    <p>This Vue starter mirrors the shape of the legacy form without completing the migration.</p>
    <form class="fields">
      <label>
        <span>Display name</span>
        <input v-model="displayName" />
      </label>
      <label>
        <span>Bio</span>
        <textarea v-model="bio" />
      </label>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useProfileForm } from "../composables/useProfileForm";

const { displayName, bio } = useProfileForm();
</script>

<style scoped>
.profile-form {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #d4d4d8;
  border-radius: 1rem;
  background: #ffffff;
}

.fields {
  display: grid;
  gap: 0.75rem;
}

label {
  display: grid;
  gap: 0.25rem;
}
</style>
