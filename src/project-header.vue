<template>
  <h2 class="project_header section_header">
    <a href="#" class="project_link"> 
      <span> {{title}} </span>
    </a>
    <div class="right_task_actions">
      <span class="clickable note_icon" data-note-type="project_note" data-note-parent-id="179486867">
        <img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="15" height="14" class="cmp_comment clickable">
      </span>
      <a href="#">
        <img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="26" height="16" class="cmp_share_project_plus">
      </a>
      <a href="#">
        <img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="16" height="16" class="cmp_task_actions icon">
      </a>
    </div>
  </h2>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style lang="sass">
.project_link {
  color: #303333;
  text-decoration: none !important;
}
</style>
