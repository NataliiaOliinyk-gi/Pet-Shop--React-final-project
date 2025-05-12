const fields = {
    name: {
        type: "text",
        placeholder: "Name",
        name: "name",
        rules: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
            },
            maxLength: {
                value: 50,
                message: "Name must be less than 50 characters",
            },
        }
    },
    phone: {
        type: "tel",
        placeholder: "Phone number",
        name: "phone",
        rules: {
            required: "Phone number is required",
            pattern: {
                value: /^\+?[0-9\s\-]{7,20}$/,
                message: "Invalid phone number format",
            }
        }
    },
    email: {
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
            }
        }
    },

};

export default fields;