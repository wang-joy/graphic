<template>
  <div class="obr-menu">
    <Dropdown>
        <a href="javascript:void(0)" class="menu-item">
            文件<Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem class="dropdown-item">新建</DropdownItem>
            <DropdownItem>打开...</DropdownItem>
            <DropdownItem>打开历史文件</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .menu-item{
    display: inline-block;
    padding: 3px 10px;
    color: black;
    font-size: 12px;
  }

</style>
