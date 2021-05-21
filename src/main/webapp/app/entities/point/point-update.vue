<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="jhipsterVueApp.point.home.createOrEditLabel"
          data-cy="PointCreateUpdateHeading"
          v-text="$t('jhipsterVueApp.point.home.createOrEditLabel')"
        >
          Create or edit a Point
        </h2>
        <div>
          <div class="form-group" v-if="point.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="point.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('jhipsterVueApp.point.title')" for="point-title">Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              id="point-title"
              data-cy="title"
              :class="{ valid: !$v.point.title.$invalid, invalid: $v.point.title.$invalid }"
              v-model="$v.point.title.$model"
              required
            />
            <div v-if="$v.point.title.$anyDirty && $v.point.title.$invalid">
              <small class="form-text text-danger" v-if="!$v.point.title.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small class="form-text text-danger" v-if="!$v.point.title.maxLength" v-text="$t('entity.validation.maxlength', { max: 20 })">
                This field cannot be longer than 20 characters.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('jhipsterVueApp.point.description')" for="point-description">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              id="point-description"
              data-cy="description"
              :class="{ valid: !$v.point.description.$invalid, invalid: $v.point.description.$invalid }"
              v-model="$v.point.description.$model"
              required
            />
            <div v-if="$v.point.description.$anyDirty && $v.point.description.$invalid">
              <small class="form-text text-danger" v-if="!$v.point.description.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.point.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./point-update.component.ts"></script>
