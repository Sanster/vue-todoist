<template>
<table cellpadding="0" cellspacing="0">
  <tbody>
    <tr>
      <td class="checker sel_checkbox_td">
        <div class="amicheckbox">
          <img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="17" height="17" class="cmp_12_checkbox_off amicheckbox_img">
        </div>
      </td>
      <td class="text_cursor content task_content_item">
        <div class="text_cursor div_due_date">
          <span class="date empty"></span>
        </div>
        <span class="text sel_item_content">
          {{text}}
          <span class="clickable note_icon note_icon_hidden" data-note-type="item_note" data-note-parent-id="50724437">
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="15" height="14" class="cmp_comment clickable sel_item_notes">
          </span>
        </span>
      </td>
      <td class="menu">
        <div class="icon menu cmp_menu_on gear_menu"> </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style lang="sass">

</style>
