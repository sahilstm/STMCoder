let generatedOTP = "";

function sendOTP() {
    const phone = document.getElementById("phone").value;
    if (phone.length < 5) {
        alert("Please enter a valid phone number!");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");

    const maskedPhone = "XXXXXXXX" + phone.slice(-2);

    document.getElementById("otpMessage").innerHTML =
        `We have just sent an OTP <b>(${generatedOTP})</b> to your phone number:<br>${maskedPhone}`;

    const inputs = document.querySelectorAll(".otp-input input");
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });
}

function verifyOTP() {
    const inputs = document.querySelectorAll(".otp-input input");
    let enteredOTP = "";
    inputs.forEach(input => enteredOTP += input.value);

    if (enteredOTP === generatedOTP) {
        document.getElementById("step2").classList.add("hidden");
        document.getElementById("step3").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("step3").classList.add("hidden");
            document.getElementById("step4").classList.remove("hidden");
        }, 2000);
    } else {
        document.getElementById("errorMsg").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("errorMsg").classList.add("hidden");
        }, 2000);
    }
}
