
//footer
Vue.component('AppFooter', {
    props: {
        companyName:
            {type: String},
        companyEmail:
            {type: String}
    },

    template: `<div><footer class="copy"> &copy; Copyright 2019 {{companyName}}
                <a href="mailto:guitacademy@gmail.com" target="_blank"> &nbsp; &nbsp; {{companyEmail}}</a></footer></div>`
});
Vue.component('navbar', {
    template:`<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Guitfiddle Academy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="index.html" >Home</b-nav-item>
        <b-nav-item href="lessons.html">Lessons</b-nav-item>
        <b-nav-item href="location.html">Location</b-nav-item>
        <b-nav-item href="calendar.html">Calendar</b-nav-item>
        <b-nav-item href="signup.html">Sign Up</b-nav-item>
        <b-nav-item href="help.html" >Help Center</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!--<b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>        </b-nav-item-dropdown>-->

          <!-- Using 'button-content' slot -->
         <!-- <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>-->
</div>
`
});
//cards for the help centers
Vue.component('helpcard',{
    props: {
        head:  String,
        title:  String,
        title2:  String,
        subtitle:  String,
        description:  String,
        description2:  String,
        link: String,
        link2: String,
        linkdescr: String,
        linkdescr2: String,
        picture: String,
        imgalt: String,
    },
    template: `
    <div>
    <b-row>
  <b-card
    no-body
    class="b-col"
    style="max-width: 20rem; display: inline-block;"
    :img-src="picture" 
    :img-alt="imgalt"
    img-top
  >
    <template v-slot:header>
      <h4 class="mb-0">{{head}}</h4>
    </template>

    <b-card-body>
      <b-card-title>{{title}}</b-card-title>
      <b-card-sub-title class="mb-2">{{subtitle}}</b-card-sub-title>
      <b-card-text>
       {{description}}
      </b-card-text>
    </b-card-body>

   <!-- <b-list-group flush>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>-->

    <b-card-body>
      <a :href="link" class="card-link" target="_blank">{{linkdescr}}</a>
      <!--<a href="#" class="card-link">Another link</a>-->
    </b-card-body>
    
    <b-card-body>
      <b-card-title>{{title2}}</b-card-title>
      <b-card-sub-title class="mb-2">{{subtitle}}</b-card-sub-title>
      <b-card-text>
       {{description2}}
      </b-card-text>
    </b-card-body>
     <b-card-body>
      <a :href="link2" class="card-link" target="_blank">{{linkdescr2}}</a>
      <!--<a href="#" class="card-link">Another link</a>-->
    </b-card-body>

    <!--<b-card-footer>This is a footer</b-card-footer>-->

   <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
  </b-card>-->
  </b-row>
</div>`
});

//sign up form
Vue.component('signup', {
    data() {
        return {
            form: {
                email: '',
                name: '',
                studentName: '',
                instrument: null,
                day: null,
                checked: []
            },
            instruments: [{text: 'Select One', value: null}, 'Violin', 'Viola', 'Guitar'],
            show: true,
            days: [{text: 'Select One', value: null}, 'Tuesday', 'Wednesday', 'Thursday','No Preference'],
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.studentName = ''
            this.form.instrument = null
            this.form.day = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
    template: `<div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-3" label="Student Name:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Enter student name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Instrument:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.instrument"
          :options="instruments"
          required
        ></b-form-select>
      </b-form-group>
      
      <b-form-group id="input-group-5" label="Preferred Day:" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.day"
          :options="days"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-6">
        <b-form-radio-group v-model="form.checked" id="radios-6">
        Student is: 
          <b-form-radio value="under18">Under 18</b-form-radio>
          <b-form-radio value="over18">Over 18</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!--<b-card class="mt-3" header="Form Data Result">&lt;!&ndash;result shows here&ndash;&gt;
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>`
});

// start app
new Vue({
    el: '#app',
    data: {
        name: "Guitfiddle Academy"
    }

})