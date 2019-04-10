import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login/Login.vue'
import CharacterForm from '@/components/CharacterForm/CharacterForm.vue'
import Vuetify from 'vuetify';
import Vue from 'vue'

Vue.use(Vuetify);
describe('Login.vue', () => {
  test('renders right msg when passed', () => {
    const msg = 'Login';
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  test('Check if button is rendered', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.contains('button')).toBe(true);
  });
});

describe('CharacterForm.vue', () => {
    /*test('Check if button is rendered', () => {
      const wrapper = shallowMount(CharacterSelect);
      expect(wrapper.contains('button')).toBe(true);
    });*/

  const wrapper = shallowMount(CharacterForm);
  test('Check if button is rendered', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
  test('Click button check if next page is rendered', () => {
    const button = wrapper.find('button[title="Continue"]');
    button.trigger('click');
    expect(wrapper.html()).toContain('<h2 class="character-form__headline">Class</h2>');
  });
});