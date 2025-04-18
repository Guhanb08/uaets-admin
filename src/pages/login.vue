<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */
definePage({
  meta: {
    layout: "blank",
    public: true,
  },
});

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";
import { AdminLoginMutationVariables } from "@/generated/operations";
import { useAdminLoginMutation } from "@/generated/operations";
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2Login from "@images/pages/auth_image.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import appLogo from "@images/logos/app_logo.png";


/* =======================
 * GraphQL
 * ======================= */
const {
  mutate: login,
  loading: loginFetching,
  error: loginError,
} = useAdminLoginMutation();

/* =======================
 * Interfaces
 * ======================= */

/* =======================
 * Props & Emits
 * ======================= */

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
const router  =  useRouter();
const formRef = ref<VForm>();
const isPasswordVisible = ref(false);

const form = reactive<AdminLoginMutationVariables>({
  email: "",
  password: "",
});

/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */

const onSubmit = async () => {
  const formValidate = await formRef.value?.validate();
  if (!formValidate?.valid) return;

  await login({
    email: form.email,
    password: form.password,
  });

  toast.success("Login Successful");
  router.push("/");
};

/* =======================
 * Watchers
 * ======================= */

watch(loginError, (error) => {
  console.log(error);
  if (error) toast.error(error.message);
});

/* =======================
 * Computed Properties
 * ======================= */

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
);

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <a href="javascript:void(0)">
    <div class="auth-logo d-flex align-center gap-x-3">
      <!-- <VNodeRenderer :nodes="themeConfig.app.logo" /> -->
      <h1 class="auth-title">
        {{ themeConfig.app.appName }}
      </h1>
    </div>
  </a>

  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <div
          class="d-flex align-center justify-center w-100 h-100"
          style="padding-inline: 6.25rem"
        >
          <VImg
            max-width="613"
            :src="authV2Login"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <img
          class="auth-footer-mask flip-in-rtl"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-6">
        <VCardText>
          <div class="mb-5 ">
          <img :src="appLogo" class="h-20" alt="">

          </div>
          <h4 class="text-h4 mb-1">
            Welcome to
            <span class="text-capitalize">{{ themeConfig.app.appName }}</span
            >! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VForm ref="formRef" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="Email or Username"
                  type="email"
                  placeholder="johndoe@email.com"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  :rules="[requiredValidator]"
                />

                <div
                  class="d-flex align-center flex-wrap justify-space-between my-6"
                >
                  <a class="text-primary" href="javascript:void(0)">
                    Forgot Password?
                  </a>
                </div>

                <VBtn block type="submit" :loading="loginFetching">
                  Login
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/pages/page-auth";
.h-20 {
  height: 50px;
}
</style>
