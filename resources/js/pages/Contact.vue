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
                <div class="email-head-padding">
                  <v-icon color="#F93D3D" small>mdi-checkbox-blank-circle</v-icon>
                  <v-icon color="#FCC42F" small>mdi-checkbox-blank-circle</v-icon>
                  <v-icon color="#2AC823" small>mdi-checkbox-blank-circle</v-icon>
                </div>
                <div class="email-box-padding">

                  <p>Please fill out</p><br>
                  <div class="py-4">
                    <p class="blue-text"><strong>Name</strong></p><br>
                    <v-icon :color="this.nameStyle.color" class="pr-2">{{ this.nameStyle.icon }}</v-icon><input :value="this.name"/><br/>
                  </div>
                  <div class="py-4">
                    <p class="blue-text"><strong>Email</strong></p><br>
                    <v-icon :color="this.emailStyle.color" class="pr-2">{{ this.emailStyle.icon }}</v-icon><input :value="this.email"/><br/>
                  </div>
                  <div class="py-4">
                    <p class="blue-text"><strong>Subject</strong></p><br>
                    <v-icon :color="this.subjectStyle.color" class="pr-2">{{ this.subjectStyle.icon }}</v-icon><input :value="this.subject"/><br/>
                  </div>
                  <div class="py-4">
                    <p class="blue-text"><strong>Content</strong></p><br>
                    <v-icon :color="this.messageStyle.color" class="pr-2">{{ this.messageStyle.icon }}</v-icon><input rows="5" :value="this.message"/><br/>
                  </div>

                  <div class="d-flex flex-wrap-reverse flex-column-reverse">
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
  data() {
    return {
      name: 'Jason Fernandes',
      email: 'jsfernandes83@gmail.com',
      subject: 'Test email',
      message: 'This is a test email with content typed out',
      status: 'STATUS TEST',
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
    validateInput(value, type) {
      console.log('HEy')
      if (value == 'Jason') {
        return true
      } else {
        return false
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

.email-button :disabled {
  color: #627597;
  background: none;
  border-color: #627597;
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

</style>