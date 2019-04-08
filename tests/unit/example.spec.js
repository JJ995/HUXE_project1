test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

/*import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login/Login.vue'

describe('Login.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Login';
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  })
});
*/