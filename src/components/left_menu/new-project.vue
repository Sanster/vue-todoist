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
                      <div tabindex="1" autocomplete="off" withplaceholders="undefined" class="richtext_editor sel_richtext_editor" contenteditable="true"></div>
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
              <a href="#" class="amibutton amibutton_red submit_btn"><span>添加项目</span></a>
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
  data () {
    return {
      title: 'Hello Vue 2.0!'
    }
  },
  methods: {
    cancel: function () {
      this.$emit('cancel');
    }
  }
}
</script>

<style lang="sass">

</style>
