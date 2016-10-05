<template>
  <li class="manager indent_1">
    <form>
      <table width="100%">
        <tbody>
          <tr>
            <td colspan="2" class="form_content">
              <table>
                <tbody>
                  <tr>
                    <td class="text_box_holder">
                      <div class="div_color counter_color icon-project menu_icon" id="color_selector" style="color: rgb(204, 204, 204);"></div>
                      <div ref="newProjectName" tabindex="1" autocomplete="off" withplaceholders="undefined" class="richtext_editor sel_richtext_editor" contenteditable="true" style="display: inline-block;" @keydown.enter.prevent="newProject($event)"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td rowspan="2" class="indent_arrows">
              <div>
                <img src="../../assets/images/icon-src.gif" width="14" height="14" class="cmp_indent_right">
              </div>
              <div>
                <img src="../../assets/images/icon-src.gif" width="14" height="14" class="cmp_indent_left">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="td_submit_area">
        <tbody>
          <tr>
            <td align="left" class="td_submit">
              <a href="#" class="amibutton amibutton_red submit_btn" @click.prevent="newProject($event)"><span>添加项目</span></a>
              <a class="cancel" href="" tabindex="4" @click.prevent="cancel">取消</a>
            </td>
            <td align="right" class="td_extra"></td>
          </tr>
        </tbody>
      </table>
    </form>
  </li>
</template>

<script>
export default {
  mounted: function () {
    this.$refs.newProjectName.focus();
  },
  data () {
    return {
      title: 'Hello Vue 2.0!'
    }
  },
  methods: {
    cancel: function () {
      this.$emit('cancel');
    },
    newProject: function(event) {
      let editor = this.$refs.newProjectName;
      let projectName = editor.textContent;
      editor.textContent="";
      this.$emit('createNewProject', projectName);
    }
  }
}
</script>

<style lang="sass">
li.manager {
  padding: 8px 0 !important;
  background: none !important;
  margin-bottom: 6px;

  form {
    padding: 0;
    margin: 0;
  }

  table {
    background: none !important;
  }
}
</style>
