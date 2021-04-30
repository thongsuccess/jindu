<template>
  <div class="about">
    <h2>{{ $store.state.num }}</h2>
    <a-table
      rowKey="id"
      :data-source="dataSource"
      :columns="column"
      :pagination="pagination"
      :loading="initDataLoading"
      @change="changeTableSize"
    >
      <span slot="action" slot-scope="text, record">
        <a>edit</a>
        <a-divider type="vertical" />
        <a @click="changeDetail(record)">detail</a>
        <a-divider type="vertical" />
        <a>delete</a>
      </span>
    </a-table>
    <a-modal title="detail" :visible="visible" @ok="cancel" @cancel="cancel">
      <a-carousel :after-change="onChange" :autoplay="true">
        <div v-for="(item, index) in imageData" :key="index">
          <img :src="item.image_url" alt="" />
        </div>
      </a-carousel>
    </a-modal>
  </div>
</template>
<script src="./index.js"></script>
<style></style>
