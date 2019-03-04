export default {
    name: 'Content',
    props: {
        content: String
    },
    data() {
        return {
            name: 'Test',
            count: 0,
        };
    },
    methods: {
        saySomething() {
            alert(`Hello ${this.name}! You've clicked me: ${this.count++} times...`);
        },
    }
}
