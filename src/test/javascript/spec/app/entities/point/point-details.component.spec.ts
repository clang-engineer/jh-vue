/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import VueRouter from 'vue-router';

import * as config from '@/shared/config/config';
import PointDetailComponent from '@/entities/point/point-details.vue';
import PointClass from '@/entities/point/point-details.component';
import PointService from '@/entities/point/point.service';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Point Management Detail Component', () => {
    let wrapper: Wrapper<PointClass>;
    let comp: PointClass;
    let pointServiceStub: SinonStubbedInstance<PointService>;

    beforeEach(() => {
      pointServiceStub = sinon.createStubInstance<PointService>(PointService);

      wrapper = shallowMount<PointClass>(PointDetailComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: { pointService: () => pointServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPoint = { id: 123 };
        pointServiceStub.find.resolves(foundPoint);

        // WHEN
        comp.retrievePoint(123);
        await comp.$nextTick();

        // THEN
        expect(comp.point).toBe(foundPoint);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundPoint = { id: 123 };
        pointServiceStub.find.resolves(foundPoint);

        // WHEN
        comp.beforeRouteEnter({ params: { pointId: 123 } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.point).toBe(foundPoint);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        comp.previousState();
        await comp.$nextTick();

        expect(comp.$router.currentRoute.fullPath).toContain('/');
      });
    });
  });
});
