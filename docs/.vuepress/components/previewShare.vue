<template>
  <div class="docs-share">
    <div class="card-mod"
      v-for="(item, index) in items">
      <h4 class="card-title">{{item.title}}</h4>
      <ul class="card-ul"
        v-if="item.arr.length > 0">
        <li class="card-li"
          v-for="val in item.arr">
          <router-link :to="val.url"
            class="doc-a">
            <div class="doc-item">
              <div class="logo">{{val.name}}</div>
              <div class="desc">{{val.desc}}</div>
              <div class="info">
                <span class="speech">{{val.speech}}</span>
                <span class="date">{{val.date}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mockData'],
  name: 'preview-share',
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
              position: relative;
              font-size: 14px;
              font-weight: 700;
              color: #3273dc;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-bottom: 6px;
              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 4px;
              }
            }
            .info {
              font-size: 12px;
              color: #999;
              line-height: 24px;
              display: flex;
              justify-content: space-between;
            }
            .desc {
              color: #666;
              font-size: 12px;
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
