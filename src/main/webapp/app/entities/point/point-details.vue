<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="point">
        <h2 class="jh-entity-heading" data-cy="pointDetailsHeading">
          <span v-text="$t('jhipsterVueApp.point.detail.title')">Point</span> {{ point.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('jhipsterVueApp.point.title')">Title</span>
          </dt>
          <dd>
            <span>{{ point.title }}</span>
          </dd>
          <dt>
            <span v-text="$t('jhipsterVueApp.point.description')">Description</span>
          </dt>
          <dd>
            <span>{{ point.description }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="point.id" :to="{ name: 'PointEdit', params: { pointId: point.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./point-details.component.ts"></script>
