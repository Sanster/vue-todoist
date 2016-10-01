<template>
  <div id="project_list_holder">
    <ul id="project_list" class="items generic_left_list">
      <li :class="'clickable menu_clickable indent_' + project.indent" v-for="project in projects">
        <div class="arrow" v-if="project.indent == 1" @click="arrowClicked(project, $event)">
          <img src="./assets/images/icon-src.gif" width="10" height="10" :class="project.expend ? 'cmp_open_arrow_down' : 'cmp_open_arrow_right'">
        </div>
        <table cellpadding="0" cellspacing="0" class="item_table">
          <tbody>
            <tr>
              <td class="td_color">
                <div class="div_color counter_color icon-project" style="color: rgb(251, 136, 110);"></div>
              </td>
              <td>
                <div class="td_separator" style="width: 2px;"></div>
              </td>
              <td class="name">
                <span>{{project.title}}</span><div class="counter_count" id="project_count_171109322">{{project.count}}</div>
              </td>
              <td class="menu">
                <div class="icon menu cmp_menu_on gear_menu"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: "学习",
          count: 12,
          indent: 1,
          expend: true,
        },
        {
          title: "webpack",
          count: 3,
          indent: 2,
        },
        {
          title: "sass",
          count: 8,
          indent: 2,
        },
        {
          title: "vue2.0",
          count: 5,
          indent: 1,
          expend: true,
        }
      ]
    }
  },
  methods: {
    arrowClicked: function (project, event) {
      project.expend = !project.expend;

      //hide all indented li
      let li = event.target.closest('li')
      while(true){
        let nextLi = li.nextSibling
        if(!nextLi.classList.contains("indent_1")){
          nextLi.style.display = project.expend ? "" : "none";
          li = nextLi;
        }else{
          break;
        }
      }
    }
  }
}
</script>

<style lang="sass">

</style>
