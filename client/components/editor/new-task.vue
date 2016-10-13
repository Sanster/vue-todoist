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
                      <div  ref="newTaskContent" 
                            tabindex="1" autocomplete="off" withplaceholders="undefined" 
                            class="richtext_editor sel_richtext_editor" 
                            contenteditable="true" 
                            style="display: inline-block;" 
                            @keydown.enter.prevent="newTask($event)"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="td_submit_area">
        <tbody>
          <tr>
            <td align="left" class="td_submit">
              <a  href="#" 
                  class="amibutton amibutton_red submit_btn" 
                  @click.prevent="newTask($event)">
                  <span>添加任务</span>
              </a>
              <a  class="cancel" 
                  tabindex="4" 
                  @click.prevent="cancel">取消</a>
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
    this.$refs.newTaskContent.focus();
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
    newTask: function(event) {
      let editor = this.$refs.newTaskContent;
      let taskContent = editor.textContent;
      editor.textContent="";
      this.$emit('createNewTask', taskContent);
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
