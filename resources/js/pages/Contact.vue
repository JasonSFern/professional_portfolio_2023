<template>
  <div>
    <noise-abstraction class="d-none d-sm-flex canvas"></noise-abstraction>
    <div ref="emailCont" class="email-section">
      <v-main>
        <v-container>
          <v-row>
            <v-col class="d-none d-sm-flex col-md-2"></v-col>
            <v-col class="col-sm-12 col-md-8">
              <div class="ma-6 email-box">
                <div class="d-flex">
                  <div class="col-md-4">
                    <v-icon color="#F93D3D" small>mdi-checkbox-blank-circle</v-icon>
                    <v-icon color="#FCC42F" small>mdi-checkbox-blank-circle</v-icon>
                    <v-icon color="#2AC823" small>mdi-checkbox-blank-circle</v-icon>
                  </div>
                  <div class="col-md-4" style="text-align:center">Get in touch</div>
                  <div class="col-md-4"></div>
                </div>
                <div class="pa-6">
                  <div class="d-flex pa-0">
                    <div class="d-none d-sm-flex col-sm-1 pa-0">
                      <v-icon :color="this.icon.name.color" class="pr-2 pa-0">{{ this.icon.name.icon }}</v-icon>
                    </div>
                    <div class="col-12 col-sm-11">
                      <input class="contact-input" placeholder="Name" v-model="name"/>
                    </div>
                  </div>
                  <div v-if="showBy.name" class="d-flex pa-0">
                    <div class="d-none d-sm-flex col-sm-1 pa-0">
                      <v-icon :color="this.icon.email.color" class="pr-2 pa-0">{{ this.icon.email.icon }}</v-icon>
                    </div>
                    <div class="col-12 col-sm-11">
                      <input class="contact-input" placeholder="Email" v-model="email"/>
                    </div>
                  </div>
                  <div v-if="showBy.name != '' && showBy.email != ''" class="d-flex pa-0">
                    <div class="d-none d-sm-flex col-sm-1 pa-0">
                      <v-icon :color="this.icon.subject.color" class="pr-2 pa-0">{{ this.icon.subject.icon }}</v-icon>
                    </div>
                    <div class="col-12 col-sm-11">
                      <input class="contact-input" placeholder="Subject" v-model="subject"/>
                    </div>
                  </div>
                  <div v-if="showBy.name != '' && showBy.email != '' && showBy.subject != ''" class="d-flex pa-0">
                    <div class="d-none d-sm-flex col-sm-1 pa-0">
                      <v-icon :color="this.icon.message.color" class="pr-2 pa-0 message-icon">{{ this.icon.message.icon }}</v-icon>
                    </div>
                    <div class="col-12 col-sm-11">
                      <textarea rows="5" placeholder="Message" class="contact-input" style="resize: none !important;" v-model="message"/>
                    </div>
                  </div>

                  <div v-if="showBy.name != '' && showBy.email != '' && showBy.subject != '' && showBy.message != ''" class="d-sm-flex flex-wrap-reverse flex-column-reverse pr-sm-2">
                    <button class="col-12 col-sm-2 mr-0 mr-sm-1 email-button accent-color-bg" v-on:click="submitForm()">Send</button>
                  </div>
                </div>
                <div v-if="this.status != ''" class="status-section"></div>
                <div v-if="this.status != ''" class="pt-4 px-7">
                  <p class="blue-text" :class="{ 'success-color-c': success, 'danger-color-c': !success }">{{ this.status }}</p>
                </div>
              </div>
            </v-col>
            <v-col class="col-md-2 d-none d-sm-flex"></v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>

import NoiseAbstraction from '../components/NoiseAbstraction.vue';
import generalApi from '../api/general'

export default {
  name: `Contact`,
  components: {
    NoiseAbstraction
  },
  computed: {
    nameStyle() {
      return { 
        icon: this.displayVariables.icons['danger'],
        color: this.displayVariables.colors['danger']
      }
    },
    emailStyle() {
      return { 
        icon: this.displayVariables.icons['focus'],
        color: this.displayVariables.colors['focus']
      }
    },
    subjectStyle() {
      return { 
        icon: this.displayVariables.icons['focus'],
        color: this.displayVariables.colors['focus']
      }
    },
    messageStyle() {
      return { 
        icon: this.displayVariables.icons['focus'],
        color: this.displayVariables.colors['focus']
      }
    }
  },
  watch: {
    name: function(value) {
      this.validateRegular(value, 'name')
    },
    email: function(value) {
      this.validateEmail(value, 'email')
    },
    subject: function(value) {
      this.validateRegular(value, 'subject')
    },
    message: function(value) {
      if (value != '') {
        this.setIconSuccess('message')
      } else {
        this.setIconFocus('message')
      }
    },
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      status: '',
      icon: {
        name: {
          icon: 'mdi-arrow-right-bold-circle',
          color: this.$vuetify.theme.currentTheme.accent,
        },
        email: {
          icon: 'mdi-arrow-right-bold-circle',
          color: this.$vuetify.theme.currentTheme.accent,
        },
        subject: {
          icon: 'mdi-arrow-right-bold-circle',
          color: this.$vuetify.theme.currentTheme.accent,
        },
        message: {
          icon: 'mdi-arrow-right-bold-circle',
          color: this.$vuetify.theme.currentTheme.accent,
        },
      },
      showBy: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
      displayVariables: {
        icons: {
          focus: 'mdi-arrow-right-bold-circle',
          success: 'mdi-check-circle',
          danger: 'mdi-alert-circle'
        },
        colors: {
          focus: this.$vuetify.theme.currentTheme.accent,
          success: this.$vuetify.theme.currentTheme.success,
          danger: this.$vuetify.theme.currentTheme.danger
        }
      },
      success: 0
    }
  },
  mounted() {
    this.gsap.fromTo(this.$refs.emailCont, {opacity: 0}, {duration: .5, opacity: 1, delay:.2})
  },
  methods: {
    setIconFocus(key) {
      this.showBy[key] = false
      this.icon[key].icon = this.displayVariables.icons.focus
      this.icon[key].color = this.displayVariables.colors.focus
    },
    setIconSuccess(key) {
      this.showBy[key] = true
      this.icon[key].icon = this.displayVariables.icons.success
      this.icon[key].color = this.displayVariables.colors.success
    },
    setIconDanger(key) {
      this.showBy[key] = false
      this.icon[key].icon = this.displayVariables.icons.danger
      this.icon[key].color = this.displayVariables.colors.danger
    },
    validateRegular(value, inputName) {
      if (value != '') {
        if(!/[^a-zA-Z0-9 ]/.test(value)) {
          this.setIconSuccess(inputName)
        } else {
          this.setIconDanger(inputName)
        }
      } else {
        this.setIconFocus(inputName)
      }
    },
    validateEmail(value, inputName) {
      if (value != '') {
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(filter.test(value)) {
          this.setIconSuccess(inputName)
        } else {
          this.setIconDanger(inputName)
        }
      } else {
        this.setIconFocus(inputName)
      }
    },
    submitForm() {
      let form = {}
      form.name = this.name
      form.email = this.email
      form.subject = this.subject
      form.message = this.message

      generalApi.storeContactForm(form).then(response => {
        if (response.data.success) {
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
          this.success = 1
          this.status = response.data.success
        } else {
          this.success = 0
          this.status = 'Message failed to send. Please try again later'
        }
      })
    }
  }
};
</script>

<style scoped>

.email-box {
  background-color: rgba(12,22,45,.7);
  border: 1px solid rgba(32,38,55,.2);
  border-radius: 10px !important;
  box-shadow: var(--color-shadow-small) !important;
}

.status-section {
  border: 1px solid rgba(32,38,55,.2);
}

.email-button {
  color: white;
  background: none;
  border-radius: 5px !important;
  margin-right:12px;
}

.blue-text {
  color: var(--var-primary-base);
  margin-top: 18px;
}

textarea:focus, input:focus{
    outline: none;
}

textarea, input {
  caret-color: white;
  color: white;
  width:90%;
}

.email-section {
  position: absolute;
  width: 100%;
}

.message-icon {
  align-items: normal !important;
  margin-top:18px !important;
}

.contact-input {
  background-color: rgba(9,15,37,.7);
  border: 1px solid rgba(37,44,63,.2);
  border-radius: 5px !important;
  padding: 5px;
  width:100%;
}

.success-color-c {
  color: var(--v-success-base);
}

.info-color-c {
  color: var(--v-info-base);
}

.warning-color-c {
  color: var(--v-warning-base);
}

.danger-color-c {
  color: var(--v-danger-base);
}

.canvas {
  opacity: .3;
}

</style>