<script>
export default {
  created() {
    this.$store.dispatch('updateCurrentPath', this.$route.path);
  },
  watch: {
    '$route.path'(newPath) {
      this.$store.dispatch('updateCurrentPath', newPath);
    }
  }
};
</script>
