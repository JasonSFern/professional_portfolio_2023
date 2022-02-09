<template>
  <div>
    <flying-letters class="canvas"></flying-letters>
    <div class="email-section">
      <v-content>
        <v-container>
          <v-row>
            <v-col class="col-md-2"></v-col>
            <v-col class="col-md-8">
              <div class="email-box email-margin">
                <div class="d-flex">
                  <div class="col-md-4">
                    <v-icon color="#F93D3D" small>mdi-checkbox-blank-circle</v-icon>
                    <v-icon color="#FCC42F" small>mdi-checkbox-blank-circle</v-icon>
                    <v-icon color="#2AC823" small>mdi-checkbox-blank-circle</v-icon>
                  </div>
                  <div class="col-md-4" style="text-align:center">Get in touch</div>
                  <div class="col-md-4"></div>
                </div>
                <div class="email-box-padding">
                  <div class="d-flex pa-0">
                    <div class="d-flex col-md-3 pa-0">
                      <v-icon :color="this.icon.name.color" class="pr-2 pa-0">{{ this.icon.name.icon }}</v-icon><p class="blue-text"><strong>Name:&nbsp;</strong></p>
                    </div>
                    <div class="col-md-9">
                      <input class="contact-input" v-model="name"/>
                    </div>
                  </div>
                  <div v-if="showBy.name" class="d-flex pa-0">
                    <div class="d-flex col-md-3 pa-0">
                      <v-icon :color="this.icon.email.color" class="pr-2 pa-0">{{ this.icon.email.icon }}</v-icon><p class="blue-text"><strong>Email:&nbsp;</strong></p>
                    </div>
                    <div class="col-md-9">
                      <input class="contact-input" v-model="email"/>
                    </div>
                  </div>
                  <div v-if="showBy.name != '' && showBy.email != ''" class="d-flex pa-0">
                    <div class="d-flex col-md-3 pa-0">
                      <v-icon :color="this.icon.subject.color" class="pr-2 pa-0">{{ this.icon.subject.icon }}</v-icon><p class="blue-text"><strong>Subject:&nbsp;</strong></p>
                    </div>
                    <div class="col-md-9">
                      <input class="contact-input" v-model="subject"/>
                    </div>
                  </div>
                  <div v-if="showBy.name != '' && showBy.email != '' && showBy.subject != ''" class="d-flex pa-0">
                    <div class="d-flex col-md-3 pa-0">
                      <v-icon :color="this.icon.message.color" class="pr-2 pa-0 message-icon">{{ this.icon.message.icon }}</v-icon><p class="blue-text"><strong>Message:&nbsp;</strong></p>
                    </div>
                    <div class="col-md-9">
                      <textarea rows="5" class="contact-input" style="resize: none !important;" v-model="message"/>
                    </div>
                  </div>

                  <div v-if="showBy.name != '' && showBy.email != '' && showBy.subject != '' && showBy.message != ''" class="d-flex flex-wrap-reverse flex-column-reverse">
                    <button class="col-2 email-button">Send</button>
                  </div>
                </div>
                <div style="border-top: 1px solid #202637;"></div>
                <div class="pt-4 px-7">
                  <p>{{ this.status }}</p>
                </div>
              </div>
            </v-col>
            <v-col class="col-md-2"></v-col>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<script>

import FlyingLetters from '../components/FlyingLetters.vue';

export default {
  name: `Contact`,
  components: {
    FlyingLetters,
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
    },
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
      name: 'a',
      email: 'j@g.com',
      subject: 'a',
      message: 'a',
      status: 'STATUS TEST',
      icon: {
        name: {
          icon: 'mdi-arrow-right-bold-circle',
          color: '#ea4aaa',
        },
        email: {
          icon: 'mdi-arrow-right-bold-circle',
          color: '#ea4aaa',
        },
        subject: {
          icon: 'mdi-arrow-right-bold-circle',
          color: '#ea4aaa',
        },
        message: {
          icon: 'mdi-arrow-right-bold-circle',
          color: '#ea4aaa',
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
          focus: '#ea4aaa',
          success: '#2da44e',
          danger: '#cf222e'
        }
      }
    }
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
    }
  }
};
</script>

<style scoped>

.email-box {
  background-color: #0c162d;
  border: 1px solid #202637;
  border-radius: 10px !important;
  box-shadow: var(--color-shadow-small) !important;
}

.email-margin {
  margin: 24px !important;
}

.email-box-padding {
  padding: 24px !important;
}

.email-head-padding {
  padding: 15px !important;
}

.email-button {
  color: white;
  background: none;
  background-color: #2e333f;
  border: 1px solid #868f9e;
  border-radius: 5px !important;
  padding: 5px;
  margin-right:12px;
}

.email-status-test {
  color: #627597 !important;
}

.pink-input {
  color: #ea4aaa;
}

.blue-text {
  color: #00cfc8;
  margin-bottom: 0px;
  margin-top:18px;
}

.green-text {
  color: #2da44e;
}

.red-text {
  color: #cf222e;
}

textarea:focus, input:focus{
    outline: none;
}

textarea, input {
  caret-color: white;
  color: white;
  width:90%;
}
/* font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important; */
  /* .canvas{
    position: absolute;
    width: 100vh;
    height: 100vw;
    z-index:0;
  } */

.email-section {
  position: absolute;
  width: 100%;
}

.message-icon {
  align-items: normal !important;
  margin-top:18px !important;
}

.contact-input {
  background-color: #122247;
  border: 1px solid #252c3f;
  border-radius: 5px !important;
  padding: 5px;
  width:100%;
}
/* // */

.enter { transform: translateY(100%) }
.enter-to { transform: translateY(0) }
.slide-enter-active { position: absolute }

.leave { transform: translateY(0) }
.leave-to { transform: translateY(-100%) }

.slide-enter-active,
.slide-leave-active { transition: all 750ms ease-in-out }


</style>