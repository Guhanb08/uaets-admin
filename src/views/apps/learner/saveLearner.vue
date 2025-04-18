<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";

/* =======================
 * GraphQL
 * ======================= */
import {
  CreateUserByAdminMutationVariables,
  useLearnerLazyQuery,
  useCreateUserByAdminMutation,
  useUpdateUserByAdminMutation,
  useAllActiveBranchQuery,
  useAllActiveLanguageQuery,
  useAllActiveCourseQuery,
  useAllCourseQuery,
} from "@/generated/operations";

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  isDialogVisible: boolean;
  id?: string;
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}

/* =======================
 * Props & Emits
 * ======================= */

const props = withDefaults(defineProps<Props>(), {
  isDialogVisible: false,
  id: undefined,
});

const emit = defineEmits<Emit>();

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
 const show1 = ref(false)

/* =======================
 * Form State
 * ======================= */
const fileHostUrl = import.meta.env.VITE_FILE_BASE_URL;

const formRef = ref<VForm>();
const initialFormState: CreateUserByAdminMutationVariables = {
  name: "",
  email: "",
  mobile: "",
  mobileCode: "",
  isVerified: false,
  password: "",
  roleId: "",
  profile: {
    address: "",
    addressLine2: "",
    agreeToTerms: false,
    avatar: "",
    bio: "",
    branch: "",
    city: "",
    country: "",
    dob: new Date(),
    foundUsOn: "",
    comment :"" ,
    language: "",
    state: "",
    zipCode: "",
    documents: [],
    expiryDate: null,
    courses: [],
  },
};
const form = reactive<CreateUserByAdminMutationVariables>({
  ...initialFormState,
});
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  result: branches,
  loading: branchLoading,
  error: branchError,
  refetch: refetchBranches,
} = useAllActiveBranchQuery();

const {
  result: languages,
  loading: languageLoading,
  error: languageError,
  refetch: refetchLanguages,
} = useAllActiveLanguageQuery();

const {
  result: courses,
  loading: courseLoading,
  error: courseError,
  refetch: refetchCourses,
} = useAllCourseQuery();

const {
  load: findUser,
  result: UserData,
  loading: UserFindFetching,
  error: UserFindError,
} = useLearnerLazyQuery();

const {
  mutate: createUser,
  loading: UserCreateFetching,
  error: UserCreateError,
} = useCreateUserByAdminMutation();

const {
  mutate: updateUser,
  loading: UserUpdateFetching,
  error: UserUpdateError,
} = useUpdateUserByAdminMutation();

/* =======================
 * Lifecycle Hooks
 * ======================= */

/* =======================
 * Methods
 * ======================= */

const onSubmit = async () => {
  try {
    const formValidate = await formRef.value?.validate();
    if (!formValidate?.valid) return;
    // form.UserTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        ...form,
        id: props.id,
      };
      await updateUser(updateForm);
      toast.success("Learner updated successfully");
    } else {
      await createUser(form);
      toast.success("Learner created successfully");
    }
    onClose();

  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // UserData.value = undefined;
  Object.assign(form, initialFormState);
};

const onClose = () => {
  emit("update:isDialogVisible", false);
  // onReset();
};

const selectedTags = ref<string[]>([]);

const initUser = () => {
  if (!UserData.value || !UserData.value.User.profile) return; 
  form.name = UserData.value.User.name;
  form.email = UserData.value.User.email;
  form.mobile = UserData.value.User.mobile;
  form.mobileCode = UserData.value.User.mobileCode;
  form.isVerified = UserData.value.User.isVerified;
  form.password = "";
  form.profile = {
    address: UserData.value.User.profile.address,
    addressLine2: UserData.value.User.profile.addressLine2,
    agreeToTerms: UserData.value.User.profile.agreeToTerms,
    avatar: UserData.value.User.profile.avatar,
    bio: UserData.value.User.profile.bio,
    branch: UserData.value.User.profile.branch,
    city: UserData.value.User.profile.city,
    country: UserData.value.User.profile.country,
    comment : UserData.value.User.profile.comment,
    dob: UserData.value.User.profile.dob,
    foundUsOn: UserData.value.User.profile.foundUsOn,
    language: UserData.value.User.profile.language,
    state: UserData.value.User.profile.state,
    zipCode: UserData.value.User.profile.zipCode,
    documents: UserData.value.User.profile.documents,
    expiryDate: UserData.value.User.profile.expiryDate,
    courses: UserData.value.User.profile.courses,
  };

};

/* =======================
 * Watchers
 * ======================= */

watch(
  () => props.id,
  async (id) => {
    if (id) {
      await findUser(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => UserData.value,
  (data) => {
    if (data?.User) {
     /*  const User = data.User;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(User, key)) {
          (form as any)[key] =
            User[key as keyof typeof User] ?? (form as any)[key];
        }
      }); */
      initUser();
    }
  },
  { immediate: true }
);

watch([UserCreateError, UserUpdateError, UserFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Learner ` : "Add Learner";
});

const connectTags = computed(() => {
  return selectedTags.value.map((tag) => ({
    tag: {
      connect: {
        id: tag,
      },
    },
  }));
});

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
    transition="dialog-bottom-transition"
  >
    <VCard>
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="onClose">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>
          <VToolbarTitle>{{ title }}</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn variant="text" @click.prevent="onSubmit"> Save </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <VCardText>
        <VProgressLinear
          v-if="UserFindFetching"
          indeterminate
          height="3"
          color="primary"
          striped
          :rounded="false"
        />
        <VForm
          v-else
          ref="formRef"
          @submit.prevent="onSubmit()"
          @reset.prevent="onReset"
        >
          <VRow>
            <VCol cols="12" md="8">
              <VCard class="mb-6 position-initial" title="Learner Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="4">
                      <AppTextField
                        label="Name"
                        v-model.trim="form.name"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12" md="3">
                      <AppTextField
                        label="Email"
                        v-model.trim="form.email"
                        :rules="[requiredValidator, emailValidator]"
                      />
                    </VCol>

                    <VCol cols="4" md="2">
                      <AppTextField
                        label="Mobile Code"
                        v-model.trim="form.mobileCode"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="8" md="3">
                      <AppTextField
                        label="Mobile"
                        v-model.trim="form.mobile"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                    <!--     <VCol cols="12">
                      <AppTextarea label="Learner Information" rows="3" v-model="form.profile.bio" />
                    </VCol> -->
                    <VCol cols="6" md="4">
                      <AppAutocomplete
                        label="Branch"
                        :items="branches?.AllBranch"
                        item-title="name"
                        item-value="name"
                        placeholder="Select Category"
                        :rules="[requiredValidator]"
                        v-model="form.profile.branch"
                      />
                    </VCol>

                    <VCol cols="6" md="4">
                      <AppAutocomplete
                        label="Language"
                        :items="languages?.AllLanguage"
                        item-title="name"
                        item-value="name"
                        placeholder="Select Category"
                        :rules="[requiredValidator]"
                        v-model="form.profile.language"
                      >
                        <template #item="{ props, item }">
                          <VListItem
                            v-bind="props"
                            :prepend-avatar="fileHostUrl + item?.raw?.icon"
                            :title="item?.raw?.name"
                          />
                        </template>
                      </AppAutocomplete>
                    </VCol>

                    <VCol cols="6" md="4">
                      <AppAutocomplete
                        label="How did you hear about us?"
                        :items="['Google', 'Driving School', 'Acquaintaince']"
                        placeholder="Select Category"
                        :rules="[requiredValidator]"
                        v-model="form.profile.foundUsOn"
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <AppTextField
                        v-model="form.password"
                        :append-inner-icon="
                          show1 ? 'tabler-eye-off' : 'tabler-eye'
                        "
                        :type="show1 ? 'text' : 'password'"
                          label="Password"
                        @click:append-inner="show1 = !show1"
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <FileUpload
                        label="Image"
                        v-model:files="form.profile.avatar"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>
                    <VCol cols="12" md="6">
                      <FileUpload
                        label="Documents"
                        v-model:files="form.profile.documents"
                        :allowedFileTypes="['pdf']"
                        :allowMultiSelection="true"
                      ></FileUpload>
                    </VCol>


                    <VCol cols="12" md="12">
                      <RichText
                        v-model:content="form.profile.comment"
                        label="Comments"
                      />
                    </VCol>


                 <!--    <VCol cols="12" md="3">
                      <AppDateTimePicker
                        label="Expiry Date"
                        v-model="form.profile.expiryDate"
                        :rules="[requiredValidator]"
                      />
                    </VCol> -->
                 

              <!--       <VCol cols="12" md="6">
                      <AppAutocomplete
                        label="Courses"
                        multiple
                        chips
                        :items="courses?.AllCourse"
                        item-title="name"
                        item-value="name"
                        placeholder="Select Courses"
                        :rules="[requiredValidator]"
                        v-model="form.profile.courses"
                      />
                    </VCol> -->
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="12" md="4">
              <!--    <VCard title="Profile" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <AppTextarea label="Learner Information" rows="3" v-model="form.profile.bio" />
                    </VCol>
                    <VCol cols="12">
                      <FileUpload
                        label="Image"
                        v-model:files="form.profile.avatar"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>
                    <VCol cols="12">
                      <FileUpload
                        label="Documents"
                        v-model:files="form.profile.documents"
                        :allowedFileTypes="['pdf']"
                        :allowMultiSelection="true"
                      ></FileUpload>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard> -->

              <VCard title="Learner Address" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <AppTextField
                        v-model="form.profile.address"
                        label="Address 1"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12">
                      <AppTextField
                        v-model="form.profile.addressLine2"
                        label="Address 2"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        v-model="form.profile.country"
                        label="Country"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        v-model="form.profile.city"
                        label="City"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        v-model="form.profile.state"
                        label="State"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        type="number"
                        v-model="form.profile.zipCode"
                        label="Zipcode"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss"></style>
