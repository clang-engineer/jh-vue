import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const Point = () => import('@/entities/point/point.vue');
// prettier-ignore
const PointUpdate = () => import('@/entities/point/point-update.vue');
// prettier-ignore
const PointDetails = () => import('@/entities/point/point-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/point',
    name: 'Point',
    component: Point,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/point/new',
    name: 'PointCreate',
    component: PointUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/point/:pointId/edit',
    name: 'PointEdit',
    component: PointUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/point/:pointId/view',
    name: 'PointView',
    component: PointDetails,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
