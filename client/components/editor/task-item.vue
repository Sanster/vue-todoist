<template>
<table cellpadding="0" cellspacing="0">
  <tbody>
    <tr>
      <td class="checker sel_checkbox_td">
        <div class="amicheckbox">
          <img src="../../assets/images/icon-src.gif" width="17" height="17" class="cmp_12_checkbox_off amicheckbox_img">
        </div>
      </td>
      <td class="text_cursor content task_content_item">
        <div class="text_cursor div_due_date">
          <span class="date empty"></span>
        </div>
        <span class="text sel_item_content">{{task.content}}
          <span class="clickable note_icon note_icon_hidden" data-note-type="item_note" data-note-parent-id="50724437">
            <img src="../../assets/images/icon-src.gif" width="15" height="14" class="cmp_comment clickable sel_item_notes">
            <span class="clickable note_count sel_note_count">4</span>
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
  props: ['task'],
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style lang="sass">
.checker {
  padding-top: 14px;
  padding-right: 10px;
}

.amicheckbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: center;
  line-height: 15px;
  border: 1px solid #c9c9c9;
  border-radius: 15px;
  transition: background 150ms ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task_item {
  td {
    padding-top: 13px;
    padding-bottom: 13px;
  }

  td.menu {
    padding-top: 15px !important;
    padding-bottom: 8px !important;
    border-bottom: 1px solid transparent;
  }

  .task_content_item {
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
  }

  .content {
    max-width: 500px;
    overflow: hidden;
  }
}
</style>
