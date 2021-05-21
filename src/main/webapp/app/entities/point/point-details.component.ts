import { Component, Vue, Inject } from 'vue-property-decorator';

import { IPoint } from '@/shared/model/point.model';
import PointService from './point.service';

@Component
export default class PointDetails extends Vue {
  @Inject('pointService') private pointService: () => PointService;
  public point: IPoint = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pointId) {
        vm.retrievePoint(to.params.pointId);
      }
    });
  }

  public retrievePoint(pointId) {
    this.pointService()
      .find(pointId)
      .then(res => {
        this.point = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
