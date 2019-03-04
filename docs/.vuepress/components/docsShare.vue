<template>
  <div class="docs-share">
    <div class="card-mod"
      v-for="(item, index) in items">
      <h4 class="card-title">
        {{item.title}}
      </h4>
      <ul class="card-ul">
        <li class="card-li"
          v-for="val in item.arr">
          <a :href="val.url"
            :title="val.job"
            target="_blank"
            class="doc-a">
            <div class="doc-item">
              <div class="logo"><img :src="val.image">{{val.name}}</div>
              <div class="desc">{{val.desc}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mockData'],
  name: 'docs-share',
  data () {
    return {
      items: this.mockData
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .card-mod {
    .card-title {
      font-size: 18px;
      border-left: 4px solid #3eaf7c;
      padding-left: 6px;
      margin-bottom: 16px;
    }
    .card-ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      list-style: none;
      padding-left: 0;
      .card-li {
        width: 32%;
        border: 1px solid #e4ecf3;
        box-shadow: 1px 2px 3px #f2f6f8;
        border-radius: 6px;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 16px;
        background-color: #fff;
        .doc-a {
          .doc-item {
            .logo {
              height: 40px;
              position: relative;
              font-size: 14px;
              font-weight: 700;
              color: #3273dc;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 0 0.1rem;
              line-height: 40px;
              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 8px;
              }
            }
            .desc {
              color: #666;
              font-size: 12px;
              padding-top: 10px;
              height: 42px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .card-li {
      width: 100% !important;
    }
  }
</style>
