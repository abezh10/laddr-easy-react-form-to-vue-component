import { ref } from "vue";

export function useProfileForm() {
  const displayName = ref("Taylor Rivers");
  const bio = ref("A small starter form for the migration exercise.");

  return {
    displayName,
    bio,
  };
}
