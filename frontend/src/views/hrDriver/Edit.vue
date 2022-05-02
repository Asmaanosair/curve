<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
       <CCardBody>
          <template slot="header">
            Create Users
          </template>
          <CAlert :show.sync="dismissCountDown" :color="alertColor" fade>
            ({{ dismissCountDown }}) {{ message }}
          </CAlert>
          <div class="form-group">
            <label>full name</label>
            <input
              type="text"
              v-on:keyup="onlyText($event)"
              :placeholder="'full name' + '...'"
              v-model.trim="$v.name.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.name.$error,
                'is-valid': !$v.name.$invalid
              }"
            />
            <div v-if="!$v.name.$error" class="valid-feedback">
              your Full name is valid !
            </div>

            <div v-if="$v.name.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.name.required">
                Your Full name is required .
              </span>

              <span class="d-block" v-if="!$v.name.minLength">
                Your Full name must have at least
                {{ $v.name.$params.minLength.min }} letters
              </span>

              <span class="d-block" v-if="!$v.name.maxLength">
                Your Full name must have at most
                {{ $v.name.$params.maxLength.max }} letters
              </span>
            </div>
          </div>
          <div class="form-group">
            <label>mobile</label>
            <input
              v-on:keyup="onlyNumber($event)"
              type="text"
              :placeholder="'mobile' + '...'"
              v-model.trim="$v.mobile.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.mobile.$error,
                'is-valid': !$v.mobile.$invalid
              }"
            />

            <div v-if="!$v.mobile.$error" class="valid-feedback">
              your phone is valid !
            </div>

            <div v-if="$v.mobile.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.mobile.required">
                Your phone is required .
              </span>
              <span class="d-block" v-if="!$v.mobile.numeric">
                Your phone must be numbers
              </span>

              <span class="d-block" v-if="!$v.mobile.minLength">
                Your phone must have at least
                {{ $v.mobile.$params.minLength.min }} numbers
              </span>

              <span class="d-block" v-if="!$v.mobile.maxLength">
                Your phone must have at most
                {{ $v.mobile.$params.maxLength.max }} numbers
              </span>
              <span class="d-block" v-if="!$v.mobile.isStartWith">
                Your phone must Start With 05
              </span>

            </div>
          </div>
          <div class="form-group">
            <label>Date Of Birth</label>
            <CInput
              type="date"
              :placeholder="'Date Of Birth' + '...'"
              v-model.trim="$v.age.$model"
              :class="{
                'is-invalid': $v.age.$error,
                'is-valid': !$v.age.$invalid
              }"
            >
            </CInput>

            <div v-if="theAge >= 18" class="my-valid">
              your age is valid !
            </div>

            <div v-if="$v.age.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.age.required">
                Your age is required
              </span>
              <span class="d-block" v-if="!$v.age.checkAge">
                Your age must be 18 years or Greater Than 18
              </span>
            </div>
          </div>

          <div class="form-group">
            <p>identity</p>

            <input
              v-on:keyup="onlyNumber($event)"
              type="text"
              :placeholder="'identity' + '...'"
              v-model="identity"
              v-model.trim="$v.identity.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.identity.$error,
                'is-valid': !$v.identity.$invalid
              }"
            />

            <div v-if="!$v.identity.$error" class="valid-feedback">
              Your identity is valid
            </div>

            <div v-if="$v.identity.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.identity.required">
                Your Identity is required .
              </span>
              <span class="d-block" v-if="!$v.identity.numeric">
                Your Identity must be numbers
              </span>

              <span class="d-block" v-if="!$v.identity.minLength">
                Your Identity must have at least
                {{ $v.identity.$params.minLength.min }} numbers
              </span>
            </div>
          </div>
          <label for="">Nationality</label>
          <select
            v-model.trim="$v.nationality.$model"
            :class="{
              'form-control': true,
              'is-invalid': $v.nationality.$error,
              'is-valid': !$v.nationality.$invalid
            }"
          >
            <option
            :selected="national==nationality"
              v-for="(national, index) in nationalities"
              :key="index"
              :value="national"
              >{{ national }}</option
            >
          </select>
          <div class="valid-feedback">
            your nationality is valid !
          </div>

          <div class="invalid-feedback">
            <span class="d-block" v-if="!$v.nationality.required">
              Your nationality is required .
            </span>
          </div>

          <div class="form-group">
            <p>Iqama</p>

            <input
              v-on:keyup="onlyNumber($event)"
              type="text"
              :placeholder="'Iqama' + '...'"
              v-model="nationalityId"
              v-model.trim="$v.nationalityId.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.nationalityId.$error,
                'is-valid': !$v.nationalityId.$invalid
              }"
            />

            <div v-if="!$v.nationalityId.$error" class="valid-feedback">
              Your Iqama valid !
            </div>

            <div v-if="$v.nationalityId.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.nationalityId.required">
                Your Iqama is required .
              </span>
              <span class="d-block" v-if="!$v.nationalityId.numeric">
                Your iqama must be numbers
              </span>
              <span class="d-block" v-if="!$v.nationalityId.isStartWith">
                Your iqama must Start With 1 or 2
              </span>

              <span class="d-block" v-if="!$v.nationalityId.minLength">
                Your iqama must have at least
                {{ $v.nationalityId.$params.minLength.min }} numbers
              </span>
            </div>
          </div>

          <div class="form-group">
            <p>{{ $t("password") }}</p>

            <input
              type="text"
              :placeholder="$t('password') + '...'"
              v-model="password"
              v-model.trim="$v.password.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.password.$error,
                'is-valid': !$v.password.$invalid
              }"
            />

            <div v-if="!$v.password.$error" class="valid-feedback">
              your password is valid !
            </div>

            <div v-if="$v.password.$error" class="invalid-feedback">
              <span class="d-block" v-if="!$v.password.required">
                Your password is required .
              </span>

              <span class="d-block" v-if="!$v.password.minLength">
                Your password must have at least
                {{ $v.password.$params.minLength.min }} numbers
              </span>
            </div>
          </div>


          <div class="form-group">
            <label for="">gender</label>

            <select
              v-model.trim="$v.gender.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.gender.$error,
                'is-valid': !$v.gender.$invalid
              }"
            >
              <option :selected="gender=='male'"  value="male"> male </option>
              <option :selected="gender=='female'" value="female"> female</option>
            </select>
            <div class="valid-feedback">
              your gender is valid !
            </div>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.gender.required">
                Your gender is required .
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="">Country</label>
            <select

              v-model.trim="$v.country.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.country.$error,
                'is-valid': !$v.country.$invalid
              }"
            >
              <option
                :selected="countrys==country"
                v-for="(countrys, index) in countries"
                :key="index"
                :value="countrys"
                >{{ countrys }}</option
              >
            </select>
            <div class="valid-feedback">
              your country is valid !
            </div>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.country.required">
                Your country is required .
              </span>
            </div>
          </div>

          <!-- <label for="">Country</label>

          <input
            type="text"
            v-model="country"
            list="country"
            class="form-control"
          />

          <datalist id="country">
            <option
              class="form-control"
              v-for="(country, index) in countries"
              :value="country"
              :key="index"
            >
            </option>
          </datalist> -->

          <div class="form-group">
            <label for="">Vehicle Type</label>

            <select
              v-model.trim="$v.vehicle_type.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.vehicle_type.$error,
                'is-valid': !$v.vehicle_type.$invalid
              }"
            >
              <option :selected="vehicle_type=='Motorcycle'"  value="Motorcycle"> Motorcycle </option>
              <option :selected="vehicle_type=='Sedan'" value="Sedan"> Sedan </option>
              <option :selected="vehicle_type=='Mini Van'"  value="Mini Van"> Mini Van </option>
              <option :selected="vehicle_type=='Track'" value="Track"> Track </option>
            </select>
            <div class="valid-feedback">
              your vehicle_type is valid !
            </div>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.vehicle_type.required">
                Your vehicle_type is required .
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="">Bank Name</label>

            <select
              v-model="bank_name"
              :class="{
                'form-control': true
              }"
            >
              <option :selected="bank_name=='Saudi National Bank (SNB)'" value="Saudi National Bank (SNB)">
                Saudi National Bank (SNB)
              </option>
              <option  :selected="bank_name=='Alrajhi Bank'" value="Alrajhi Bank"> Alrajhi Bank </option>
              <option :selected="bank_name=='Alinma Bank'"  value="Alinma Bank"> Alinma Bank </option>
              <option :selected="bank_name=='Albilad Bank'" value="Albilad Bank"> Albilad Bank </option>

              <option  :selected="bank_name=='The Arab National Bank (ANB)'" value="The Arab National Bank (ANB)">
                The Arab National Bank (ANB)
              </option>
              <option :selected="bank_name=='Saudi Investment Bank (SAIB)'"  value="Saudi Investment Bank (SAIB)">
                Saudi Investment Bank (SAIB)
              </option>
              <option :selected="bank_name=='Aljazira Bank'"  value="Aljazira Bank"> Aljazira Bank </option>
              <option :selected="bank_name=='Riyad Bank'" value="Riyad Bank"> Riyad Bank </option>
              <option  :selected="bank_name=='Alwwal & SABB Bank'"   value="Alwwal & SABB Bank"> Alawwal & SABB Bank </option>
              <option :selected="bank_name=='Gulf International Bank (GIB)'"  value="Gulf International Bank (GIB)">
                Gulf International Bank (GIB)
              </option>
              <option :selected="bank_name=='Banque Saudi Fransi'"    value="Banque Saudi Fransi"> Banque Saudi Fransi </option>
              <option :selected="bank_name=='First Abu Dhabi Bank (FAB)'" value="First Abu Dhabi Bank (FAB)">
                First Abu Dhabi Bank (FAB)
              </option>
              <option :selected="bank_name=='Emrates NBD Bank'"  value="Emrates NBD Bank">
                Emirates NBD Bank
              </option>
            </select>
          </div>
          <div class="form-group">
            <p>Bank Iban</p>

            <CInput
              type="text"
              :placeholder="'bank_iban' + '...'"
              v-model="bank_iban"
              v-model.trim="$v.bank_iban.$model"
              :class="{
                'is-invalid': $v.bank_iban.$error,
                'is-valid': !$v.bank_iban.$invalid
              }"
            >
            </CInput>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.bank_iban.minLength">
                Your Bank Iban must have at least
                {{ $v.bank_iban.$params.minLength.min }} chars
              </span>
              <span class="d-block" v-if="!$v.bank_iban.isStartWith">
                Your Bank Iban must Start With SA
              </span>
            </div>
          </div>
          <div role="group" class="form-group">
            <label class=""> Application Status </label>
            <select
              v-if="role=='user,admin'"
              v-model.trim="$v.application_status_id.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.application_status_id.$error,
                'is-valid': !$v.application_status_id.$invalid
              }"
            >
              <option
                v-for="(status, index) in allStatus"
                :value="status.id"
                :key="index"
              >
                {{ status.name }}
              </option>
            </select>

            <select
              v-else
              v-model.trim="$v.application_status_id.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.application_status_id.$error,
                'is-valid': !$v.application_status_id.$invalid
              }"
            >
              <option
                v-for="(status, index) in allStatus"
                v-if="status.id != 3 && status.id != 5"
                :value="status.id"
                :key="index"
              >
                {{ status.name }}
              </option>
            </select>


            <div class="valid-feedback">
              your application_status is valid !
            </div>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.application_status_id.required">
                Your application_status is required .
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="">Suppliers</label>

               <select

              v-model.trim="$v.supplier_id.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.supplier_id.$error,
                'is-valid': !$v.supplier_id.$invalid
              }"
            >
              <option
                v-for="(supplier, index) in suppliers"
                :selected="supplier.id==supplier_id"
                :value="supplier.id"
                :key="index"
              >
                {{ supplier.name }}
              </option>
            </select>
             <div class="valid-feedback">
               Supplier is valid !
            </div>

          </div>
          <div role="group" class="form-group">
            <label class=""> Contract Type </label>

            <select
              v-model.trim="$v.contract_type.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.contract_type.$error,
                'is-valid': !$v.contract_type.$invalid
              }"
            >
              <option :selected="contract_type=='Full Time'" value="Full Time"> Full Time </option>
              <option :selected="contract_type=='FreeLance'" value="FreeLance"> FreeLance </option>
            </select>
            <div class="valid-feedback">
              your contract_type is valid !
            </div>

            <div class="invalid-feedback">
              <span class="d-block" v-if="!$v.contract_type.required">
                Your contract_type is required .
              </span>
            </div>
          </div>
                 <div class="form-group">
            <label for="">Status</label>

               <select

              v-model.trim="block"
              :class="{
                'form-control': true,

              }"
            >
              <option

                :selected="block==0"
                :value="0"

              >
               active
              </option>
                <option

                :selected="block==1"
                :value="1"
              >
               block
              </option>
            </select>
             <div class="valid-feedback">
               Supplier is valid !
            </div>

          </div>



            <CButton color="primary" @click="update()">Save</CButton>
            <CButton color="danger" @click="goBack">Back</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Set Images: {{ $route.params.id }}
            </template>
            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>
            <CIcon :content="$options.plusIcon" />
            <CIcon :content="$options.fileIcon" />
            <CInputFile
              type="file"
              v-on:change="handleFileUpload"
              placeholder="New file"
            />
          </CForm>
          <CProgress
            :value="progress"
            color="success"
            striped
            :animated="true"
            class="mb-2"
          />
        </CCardBody>
      </CCard>

      <CCard no-header>
        <CCardBody>
          <CProgress
            :value="deleteProgress"
            color="warning"
            striped
            :animated="true"
            class="mb-2"
          />
          <CRow>
            <CCol col="4" :key="file.id" v-for="file in files">
              <img
                class="image"
                :src="file.file_path"
                @click="imageClick(file.file_path)"
              />
              <CButton class="btn btn-danger" @click="deleteFile(file.id)"
                >delete</CButton
              >
            </CCol>
          </CRow>
          <vue-gallery-slideshow
            :images="images"
            :index="imageIndex"
            @close="imageIndex = null"
          ></vue-gallery-slideshow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<style>
.image {
  width: 150px;
  height: 150px;
  background-size: cover;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>

<script>
import axios from "axios";
import VueGallerySlideshow from "vue-gallery-slideshow";
import {between, email, maxLength, minLength, minValue, numeric, required} from "vuelidate/lib/validators";

export default {
  name: "EditUser",
  components: {
    VueGallerySlideshow
  },
  props: {
    caption: {
      type: String,
      default: "User id"
    }
  },
  data: () => {
    return {
      $all_countries_ar: [
        "أفغانستان",
        "ألبانيا",
        "الجزائر",
        "ساموا الأمريكية",
        "أندورا",
        "أنغولا",
        "أنغيلا",
        "أنتاركتيكا",
        "أنتيغوا وبربودا",
        "الأرجنتين",
        "أرمينيا",
        "أروبا",
        "أستراليا",
        "النمسا",
        "أذربيجان",
        "جزر البهاما",
        "البحرين",
        "بنغلاديش",
        "بربادوس",
        "بيلاروس",
        "بلجيكا",
        "بليز",
        "بنين",
        "برمودا",
        "بوتان",
        "بوليفيا (دولة - المتعددة القوميات)",
        "بونير وسينت أوستاتيوس وسابا",
        "البوسنة والهرسك",
        "بوتسوانا",
        "جزيرة بوفيت",
        "البرازيل",
        "إقليم المحيط الهندي البريطاني (the)",
        "بروناي دار السلام",
        "بلغاريا",
        "بوركينا فاسو",
        "بوروندي",
        "كابو فيردي",
        "كمبوديا",
        "الكاميرون",
        "كندا",
        "جزر كايمان (ال)",
        "جمهورية أفريقيا الوسطى",
        "تشاد",
        "تشيلي",
        "الصين",
        "جزيرة الكريسماس",
        "جزر كوكوس (كيلينغ)",
        "كولومبيا",
        "جزر القمر",
        "جمهورية الكونغو الديمقراطية",
        "الكونغو (ال)",
        "جزر كوك",
        "كوستا ريكا",
        "كرواتيا",
        "كوبا",
        "كوراساو",
        "قبرص",
        "التشيك",
        "كوت ديفوار",
        "الدنمارك",
        "جيبوتي",
        "دومينيكا",
        "جمهورية الدومينيكان",
        "إكوادور",
        "مصر",
        "السلفادور",
        "غينيا الإستوائية",
        "إريتريا",
        "إستونيا",
        "أثيوبيا",
        "جزر فوكلاند (مالفيناس)",
        "جزر فارو",
        "فيجي",
        "فنلندا",
        "فرنسا",
        "غيانا الفرنسية",
        "بولينيزيا الفرنسية",
        "الأقاليم الجنوبية الفرنسية (ال)",
        "الغابون",
        "غامبيا",
        "جورجيا",
        "ألمانيا",
        "غانا",
        "جبل طارق",
        "اليونان",
        "الأرض الخضراء",
        "غرينادا",
        "جوادلوب",
        "غوام",
        "غواتيمالا",
        "غيرنسي",
        "غينيا",
        "غينيا - بيساو",
        "غيانا",
        "هايتي",
        "قلب الجزيرة وجزر ماكدونالز",
        "الكرسي الرسولي",
        "هندوراس",
        "هونغ كونغ",
        "هنغاريا",
        "أيسلندا",
        "الهند",
        "إندونيسيا",
        "جمهورية إيران الإسلامية",
        "العراق",
        "أيرلندا",
        "جزيرة آيل أوف مان",
        "إسرائيل",
        "إيطاليا",
        "جامايكا",
        "اليابان",
        "جيرسي",
        "الأردن",
        "كازاخستان",
        "كينيا",
        "كيريباتي",
        "كوريا (جمهورية - الديمقراطية الشعبية)",
        "جمهورية كوريا",
        "الكويت",
        "قيرغيزستان",
        "جمهورية لاو الديمقراطية الشعبية (ذا)",
        "لاتفيا",
        "لبنان",
        "ليسوتو",
        "ليبيريا",
        "ليبيا",
        "ليختنشتاين",
        "ليتوانيا",
        "لوكسمبورغ",
        "ماكاو",
        "مدغشقر",
        "ملاوي",
        "ماليزيا",
        "جزر المالديف",
        "مالي",
        "مالطا",
        "جزر مارشال",
        "مارتينيك",
        "موريتانيا",
        "موريشيوس",
        "مايوت",
        "المكسيك",
        "ميكرونيزيا (ولايات - الموحدة)",
        "مولدوفا (جمهورية)",
        "موناكو",
        "منغوليا",
        "الجبل الأسود",
        "مونتسيرات",
        "المغرب",
        "موزمبيق",
        "ميانمار",
        "ناميبيا",
        "ناورو",
        "نيبال",
        "هولندا",
        "كاليدونيا الجديدة",
        "نيوزيلندا",
        "نيكاراغوا",
        "النيجر",
        "نيجيريا",
        "نيوي",
        "جزيرة نورفولك",
        "جزر ماريانا الشمالية",
        "النرويج",
        "سلطنة عمان",
        "باكستان",
        "بالاو",
        "فلسطين , دولة",
        "بنما",
        "بابوا غينيا الجديدة",
        "باراغواي",
        "بيرو",
        "الفلبين",
        "بيتكيرن",
        "بولندا",
        "البرتغال",
        "بورتوريكو",
        "دولة قطر",
        "جمهورية شمال مقدونيا",
        "رومانيا",
        "الاتحاد الروسي",
        "رواندا",
        "جمع شمل",
        "سانت بارتيليمي",
        "سانت هيلانة وأسنسيون وتريستان دا كونها",
        "سانت كيتس ونيفيس",
        "القديسة لوسيا",
        "سانت مارتن (الجزء الفرنسي)",
        "سانت بيير وميكلون",
        "سانت فنسنت وجزر غرينادين",
        "ساموا",
        "سان مارينو",
        "ساو تومي وبرينسيبي",
        "المملكة العربية السعودية",
        "السنغال",
        "صربيا",
        "سيشيل",
        "سيرا ليون",
        "سنغافورة",
        "سانت مارتن (الجزء الهولندي)",
        "سلوفاكيا",
        "سلوفينيا",
        "جزر سليمان",
        "الصومال",
        "جنوب أفريقيا",
        "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
        "جنوب السودان",
        "إسبانيا",
        "سيريلانكا",
        "السودان",
        "سورينام",
        "سفالبارد وجان ماين",
        "السويد",
        "سويسرا",
        "الجمهورية العربية السورية",
        "تايوان",
        "طاجيكستان",
        "جمهورية تنزانيا المتحدة",
        "تايلاند",
        "تيمور الشرقية",
        "توجو",
        "توكيلاو",
        "تونغا",
        "ترينداد وتوباغو",
        "تونس",
        "تركيا",
        "جزر تركس وكايكوس",
        "توفالو",
        "أوغندا",
        "أوكرانيا",
        "الإمارات العربية المتحدة",
        "المملكة المتحدة لبريطانيا العظمى وأيرلندا الشمالية (ال)",
        "جزر الولايات المتحدة الصغيرة النائية (ال)",
        "الولايات المتحدة الأمريكية",
        "أوروغواي",
        "أوزبكستان",
        "فانواتو",
        "فنزويلا (جمهورية - البوليفارية)",
        "فيتنام",
        "جزر العذراء البريطانية)",
        "جزر فيرجن (الولايات المتحدة)",
        "واليس وفوتونا",
        "الصحراء الغربية",
        "اليمن",
        "زامبيا",
        "زيمبابوي",
        "جزر آلاند"
      ],
      nationalities_ar: [
        "أفغاني",
        "الألبانية",
        "جزائري",
        "أمريكي",
        "أندورا",
        "الأنغولي",
        "أنتيجوان",
        "أرجنتيني",
        "أرميني",
        "أسترالي",
        "النمساوي",
        "أذربيجاني",
        "الباهاما",
        "بحريني",
        "بنجلاديشية",
        "باربادوسي",
        "باربودانز",
        "باتسوانا",
        "بيلاروسية",
        "بلجيكي",
        "بليز",
        "بنين",
        "بوتاني",
        "بوليفي",
        "بوسني",
        "برازيلي",
        "بريطاني",
        "بروناي",
        "البلغارية",
        "بوركينا فاسو",
        "بورمي",
        "بوروندي",
        "كمبودي",
        "كاميروني",
        "كندي",
        "الرأس الأخضر",
        "أفريقيا الوسطى",
        "تشادي",
        "تشيلي",
        "صينى",
        "كولومبي",
        "كمرونى",
        "كونغوليون",
        "كوستاريكا",
        "كرواتي",
        "الكوبي",
        "قبرصي",
        "التشيكية",
        "دانماركي",
        "جيبوتي",
        "الدومينيكان",
        "اللغة الهولندية",
        "التيموريون الشرقيون",
        "إكوادوري",
        "مصرية",
        "أميري",
        "غينيا الاستوائية",
        "إريتري",
        "الإستونية",
        "إثيوبي",
        "فيجي",
        "الفلبينية",
        "فنلندية",
        "الفرنسية",
        "الجابونيين",
        "غامبي",
        "الجورجية",
        "ألمانية",
        "غاني",
        "اليونانية",
        "غرينادية",
        "غواتيمالية",
        "غينيا بيساوان",
        "غينيا",
        "جوياني",
        "الهايتي",
        "هيرزيغوفينيان",
        "هندوراس",
        "مجري",
        "آي كيريباتي",
        "آيسلندي",
        "هندي",
        "إندونيسي",
        "إيراني",
        "عراقي",
        "إيرلندي",
        "إسرائيلي",
        "إيطالي",
        "ساحل العاج",
        "جامايكي",
        "اليابانية",
        "أردني",
        "الكازاخستاني",
        "كيني",
        "كيتيان ونيفيسيان",
        "كويتي",
        "قيرغيزستان",
        "اللاوسي",
        "لاتفيا",
        "لبناني",
        "ليبيري",
        "ليبي",
        "ليختنشتاينر",
        "ليتواني",
        "لوكسمبورجر",
        "المقدونية",
        "مدغشقر",
        "ملاوي",
        "ماليزي",
        "مالديفان",
        "مالي",
        "المالطية",
        "مارشال",
        "موريتاني",
        "موريشيوسية",
        "مكسيكي",
        "ميكرونيزية",
        "مولدوفا",
        "موناكان",
        "المنغولية",
        "مغربي",
        "موسوثو",
        "Motswana",
        "موزمبيقى",
        "الناميبي",
        "ناورو",
        "نيبالي",
        "نيوزيلندي",
        "نيكاراغوا",
        "نيجيري",
        "النيجر",
        "كوري شمالي",
        "شمالية إيرلندية",
        "النرويجية",
        "عماني",
        "باكستاني",
        "بالاوان",
        "بنمي",
        "بابوا غينيا الجديدة",
        "باراجواي",
        "بيرو",
        "تلميع",
        "البرتغالية",
        " قطري",
        "روماني",
        "الروسية",
        "رواندي",
        "سانت لوسيان",
        "سلفادورية",
        "ساموا",
        "سان مارينيز",
        "ساو توميان",
        "سعودي",
        "اسكتلندي",
        "سنغالي",
        "الصربية",
        "سيشيل",
        "سيراليوني",
        "سنغافوري",
        "السلوفاكية",
        "سلوفينية",
        "جزر سليمان",
        "صومالي",
        "جنوب افريقيا",
        "كوريا الجنوبية",
        "الأسبانية",
        "سري لانكا",
        "سوداني",
        "سورينامير",
        "سوازي",
        "السويدية",
        "سويسري",
        "سوري",
        "تايواني",
        "طاجيكي",
        "التنزانية",
        "التايلاندية",
        "توغو",
        "تونجا",
        "ترينيداد / توباغونيان",
        "تونسي",
        "اللغة التركية",
        "توفالوان",
        "أوغندي",
        "الأوكرانية",
        "أوروغواي",
        "أوزبكستان",
        "فنزويلية",
        "فيتنامي",
        "ويلزى",
        "يمني",
        "زامبي",
        "زيمبابوي"
      ],

      nationalities: [
        "Afghan",
        "Albanian",
        "Algerian",
        "American",
        "Andorran",
        "Angolan",
        "Antiguans",
        "Argentinean",
        "Armenian",
        "Australian",
        "Austrian",
        "Azerbaijani",
        "Bahamian",
        "Bahraini",
        "Bangladeshi",
        "Barbadian",
        "Barbudans",
        "Batswana",
        "Belarusian",
        "Belgian",
        "Belizean",
        "Beninese",
        "Bhutanese",
        "Bolivian",
        "Bosnian",
        "Brazilian",
        "British",
        "Bruneian",
        "Bulgarian",
        "Burkinabe",
        "Burmese",
        "Burundian",
        "Cambodian",
        "Cameroonian",
        "Canadian",
        "Cape Verdean",
        "Central African",
        "Chadian",
        "Chilean",
        "Chinese",
        "Colombian",
        "Comoran",
        "Congolese",
        "Costa Rican",
        "Croatian",
        "Cuban",
        "Cypriot",
        "Czech",
        "Danish",
        "Djibouti",
        "Dominican",
        "Dutch",
        "East Timorese",
        "Ecuadorean",
        "Egyptian",
        "Emirian",
        "Equatorial Guinean",
        "Eritrean",
        "Estonian",
        "Ethiopian",
        "Fijian",
        "Filipino",
        "Finnish",
        "French",
        "Gabonese",
        "Gambian",
        "Georgian",
        "German",
        "Ghanaian",
        "Greek",
        "Grenadian",
        "Guatemalan",
        "Guinea-Bissauan",
        "Guinean",
        "Guyanese",
        "Haitian",
        "Herzegovinian",
        "Honduran",
        "Hungarian",
        "I-Kiribati",
        "Icelander",
        "Indian",
        "Indonesian",
        "Iranian",
        "Iraqi",
        "Irish",
        "Israeli",
        "Italian",
        "Ivorian",
        "Jamaican",
        "Japanese",
        "Jordanian",
        "Kazakhstani",
        "Kenyan",
        "Kittian and Nevisian",
        "Kuwaiti",
        "Kyrgyz",
        "Laotian",
        "Latvian",
        "Lebanese",
        "Liberian",
        "Libyan",
        "Liechtensteiner",
        "Lithuanian",
        "Luxembourger",
        "Macedonian",
        "Malagasy",
        "Malawian",
        "Malaysian",
        "Maldivan",
        "Malian",
        "Maltese",
        "Marshallese",
        "Mauritanian",
        "Mauritian",
        "Mexican",
        "Micronesian",
        "Moldovan",
        "Monacan",
        "Mongolian",
        "Moroccan",
        "Mosotho",
        "Motswana",
        "Mozambican",
        "Namibian",
        "Nauruan",
        "Nepalese",
        "New Zealander",
        "Nicaraguan",
        "Nigerian",
        "Nigerien",
        "North Korean",
        "Northern Irish",
        "Norwegian",
        "Omani",
        "Pakistani",
        "Palauan",
        "Panamanian",
        "Papua New Guinean",
        "Paraguayan",
        "Peruvian",
        "Polish",
        "Portuguese",
        "Qatari",
        "Romanian",
        "Russian",
        "Rwandan",
        "Saint Lucian",
        "Salvadoran",
        "Samoan",
        "San Marinese",
        "Sao Tomean",
        "Saudi",
        "Scottish",
        "Senegalese",
        "Serbian",
        "Seychellois",
        "Sierra Leonean",
        "Singaporean",
        "Slovakian",
        "Slovenian",
        "Solomon Islander",
        "Somali",
        "South African",
        "South Korean",
        "Spanish",
        "Sri Lankan",
        "Sudanese",
        "Surinamer",
        "Swazi",
        "Swedish",
        "Swiss",
        "Syrian",
        "Taiwanese",
        "Tajik",
        "Tanzanian",
        "Thai",
        "Togolese",
        "Tongan",
        "Trinidadian/Tobagonian",
        "Tunisian",
        "Turkish",
        "Tuvaluan",
        "Ugandan",
        "Ukrainian",
        "Uruguayan",
        "Uzbekistani",
        "Venezuelan",
        "Vietnamese",
        "Welsh",
        "Yemenite",
        "Zambian",
        "Zimbabwean"
      ],

      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
      ],
      allStatus: {},
      suppliers: {},
      name: "",
      mobile: "",
      identity: "",
      nationality: "",
      status: "",
      uuid: "",
      supplier_id: "",
      password: "",
      application_status_id: "",
      age: "",
      theAge:0,
      bank_name: "",
      role:"",
      vehicle_type: "",
      nationalityId: "",
      contract_type: "",
      country:"",
      gender:"",
      bank_iban: "",
      showMessage: false,
      message: "",
      block:"",
      alertColor: "",
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      images: [],
      files: "",
      fileId: "",
      imageIndex: null,
      progress: 0,
      deleteProgress: 0
    };
  },
 validations: {
    name: {
      required,
      minLength: minLength(14),
      maxLength: maxLength(40)
    },
    mobile: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10),
      isStartWith(value) {
        if (value === "") return true;
        return new Promise(resolve => {
          resolve(value.startsWith("05"));
        });
      }

    },
    nationalityId: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(20),
      isStartWith(value) {
        if (value === "") return true;
        return new Promise(resolve => {
          let valid = value.startsWith("1") || value.startsWith("2");
          resolve(valid);
        });
      }
    },
    identity: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(20)
    },
    bank_name: {},
    bank_iban: {
      minLength: minLength(24),
      isStartWith(value) {
        if (value === "") return true;
        return new Promise(resolve => {
          let valid = value.startsWith("SA");
          resolve(valid);
        });
      }
    },
    age: {
      required,
      numeric,
      checkAge(value) {
        self = this;
        if (value === "") return true;
        return new Promise(resolve => {
          let currentDate = new Date();
          let year = currentDate.getFullYear();
          let month = currentDate.getMonth();
          let day = currentDate.getDate();
          let theDate = month + "/" + day + "/" + year;
          const date1 = new Date(theDate);
          const date2 = new Date(value);
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const diffYears = diffDays / 365;
          self.theAge = Math.round(diffYears);

          let valid;

          if (diffYears >= 18) {
            valid = true;
          } else {
            valid = false;
          }

          resolve(valid);
        });
      }
    },

    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    vehicle_type: {
      required
    },
    application_status_id: {
      required
    },

    contract_type: {
      required
    },
    nationality: {
      required
    },
    country: {
      required
    },
    gender: {
      required
    },
    supplier_id:{
      required
    }
  },
  methods: {
     onlyText(event) {
      let regex = /[^a-z]/gi;
      var Key = event.keyCode
        ? event.keyCode
        : event.which
        ? event.which
        : event.charCode;
      if (Key == 13 || (Key >= 48 && Key <= 57)) {
        event.target.value = event.target.value.replace(regex, "");
      }
    },
    onlyNumber(event) {
      let regex = /[^0-9]/gi;
      var Key = event.keyCode
        ? event.keyCode
        : event.which
        ? event.which
        : event.charCode;
      if (Key == 13 || (Key >= 48 && Key <= 57)) {
      } else {
        event.target.value = event.target.value.replace(regex, "");
      }
    },
    goBack() {
      this.$router.go(-1);
      // this.$router.replace({path: '/users'})
    },
    fleetInfo() {
      let self = this;
      axios
        .get(
          "/api/driver-applications/" +
            self.$route.params.id +
            "/edit?token=" +
            localStorage.getItem("api_token")
        )
        .then(function(response) {
            let currentDate = new Date();
          let year = currentDate.getFullYear() - response.data.fleet.age ;
          let theDate = '00' + "/" + '00' + "/" + year;

          console.log(response.data.fleet.files);
            self.role = response.data.user.menuroles;
          (self.name = response.data.fleet.name),
            (self.status = response.data.fleet.status),
            (self.mobile = response.data.fleet.mobile),
            (self.identity = response.data.fleet.identity),
            (self.block = response.data.fleet.block),
            (self.nationality = response.data.fleet.nationality),
            (self.application_status_id =
              response.data.fleet.application_status_id),
            (self.age = theDate),
            (self.bank_name = response.data.fleet.bank_name),
            (self.vehicle_type = response.data.fleet.vehicle_type),
            (self.nationalityId = response.data.fleet.nationalityId),
            (self.contract_type = response.data.fleet.contract_type),
            (self.bank_iban = response.data.fleet.bank_iban),
            (self.country = response.data.fleet.country),
            (self.gender = response.data.fleet.gender),
             (self.theAge =parseInt(response.data.fleet.age)),
            (self.uuid = response.data.fleet.uuid),
              (self.supplier_id = response.data.fleet.user_id),
            (self.allStatus = response.data.status);
          self.suppliers = response.data.suppliers;
          self.files = response.data.fleet.files;



          self.images = [];
          response.data.fleet.files.map(file => {
            self.images.push(file.file_path);
          });


        })
        .catch(function(error) {
          console.log(error);
          self.alertColor = "danger";
          self.message = "unexpected error occurred in loading the fleet info.";
          self.showAlert();
        });
    },
    update() {
      let self = this;
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("mobile", this.mobile);
      formData.append("identity", this.identity);
      formData.append("password", this.password);
      formData.append("age", self.theAge);
      formData.append("bank_name", this.bank_name);
      formData.append("vehicle_type", this.vehicle_type);
      formData.append("country", this.country);
      formData.append("gender", this.gender);
      formData.append("nationalityId", this.nationalityId);
      formData.append("nationality", this.nationality);
      formData.append("contract_type", this.contract_type);
      formData.append("bank_iban", this.bank_iban);
      formData.append("status", this.status);
      formData.append("block", this.block);
      formData.append("uuid", this.uuid);
      formData.append("supplier_id", this.supplier_id);
      formData.append("application_status_id", this.application_status_id);
      formData.append("_method", "PUT");


      axios
        .post(
          "/api/driver-applications/" +
            self.$route.params.id +
            "?token=" +
            localStorage.getItem("api_token"),
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(function(response) {
          self.alertColor = "success";
          self.message = "Successfully updated user.";
          self.showAlert();
        })
        .catch(function(error) {
          console.log(error);
          self.alertColor = "danger";
          self.message = "unexpected error occurred in Editing the fleet.";
          self.showAlert();
        });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    deleteFile(id) {
      let self = this;
      axios
        .post(
          "/api/fleets/deleteFile/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {},
          {
            onUploadProgress: function(progressEvent) {
              this.deleteProgress = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this)
          }
        )
        .then(function() {
          self.fleetInfo();
          self.deleteProgress = 0;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleFileUpload(files, event) {
      let self = this;
      let formData = new FormData();
      formData.append("file", files[0]);

      axios
        .post(
          "/api/fleets/addFile/" +
            self.$route.params.id +
            "?token=" +
            localStorage.getItem("api_token"),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            onUploadProgress: function(progressEvent) {
              this.progress = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this)
          }
        )
        .then(function() {
          self.fleetInfo();
          self.progress = 0;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    imageClick(path) {
      let self = this;
      this.imageIndex = self.images.indexOf(path);
    }
  },
  mounted: function() {

    this.fleetInfo();
  }
};
</script>
