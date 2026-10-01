(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const controls = [...form.querySelectorAll("[data-form-control]")];
  const submit = form.querySelector("[data-form-submit]");
  const submitLabel = form.querySelector("[data-submit-label]");
  const submitError = form.querySelector("[data-submit-error]");
  const success = form.querySelector("[data-form-success]");
  const heading = form.querySelector(".contact-form__heading");
  const fields = form.querySelector(".contact-form__fields");
  const submitArea = form.querySelector(".contact-form__submit-area");
  const copy = {
    required: "入力してください。",
    select: "お問い合わせ種別を選択してください。",
    email: "メールアドレスの形式を確認してください。",
  };

  const errorFor = (control) => form.querySelector(`#${control.id}-error`);

  const clearError = (control) => {
    const error = errorFor(control);
    control.removeAttribute("aria-invalid");
    control.removeAttribute("aria-describedby");
    control.classList.remove("is-format-error");
    if (error) {
      error.textContent = "";
      error.hidden = true;
    }
  };

  const showError = (control, message, { format = false } = {}) => {
    const error = errorFor(control);
    control.setAttribute("aria-invalid", "true");
    if (error) {
      error.textContent = message;
      error.hidden = false;
      control.setAttribute("aria-describedby", error.id);
    }
    control.classList.toggle("is-format-error", format);
  };

  const validate = (control) => {
    const value = control.value.trim();
    if (!value) {
      showError(control, control.tagName === "SELECT" ? copy.select : copy.required);
      return false;
    }
    if (control.type === "email" && (!control.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
      showError(control, copy.email, { format: true });
      return false;
    }
    clearError(control);
    return true;
  };

  const clearSubmitError = () => {
    submitError.hidden = true;
  };

  const showSubmitError = () => {
    submitError.hidden = false;
  };

  const setLoading = (loading) => {
    form.classList.toggle("is-loading", loading);
    form.setAttribute("aria-busy", String(loading));
    submit.disabled = loading;
    submit.classList.toggle("is-loading", loading);
    submitLabel.textContent = loading ? "Loading" : "内容を送信する";
    if (loading) clearSubmitError();
  };

  const showSuccess = () => {
    setLoading(false);
    form.classList.add("is-success");
    heading.hidden = true;
    fields.hidden = true;
    submitArea.hidden = true;
    success.hidden = false;
  };

  controls.forEach((control) => {
    const revalidate = () => {
      if (control.getAttribute("aria-invalid") === "true") validate(control);
    };
    control.addEventListener("input", revalidate);
    control.addEventListener("change", revalidate);
    control.addEventListener("blur", revalidate);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (submit.disabled || form.classList.contains("is-success")) return;

    const valid = controls.map(validate).every(Boolean);
    if (!valid) {
      controls.find((control) => control.getAttribute("aria-invalid") === "true")?.focus();
      return;
    }

    setLoading(true);
    // Development/demo UI only. No API request is made, so normal submit must not present Success.
    window.setTimeout(() => {
      setLoading(false);
      showSubmitError();
    }, 700);
  });

  const previewState = new URLSearchParams(window.location.search).get("state");
  if (previewState === "focus") {
    const company = form.querySelector("#company");
    company.classList.add("is-focus-preview");
    window.requestAnimationFrame(() => company.focus());
  } else if (previewState === "error") {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const email = form.querySelector("#email");
    email.value = "name@example";
    if (mobile) {
      form.querySelector("#inquiry-type").value = "consultation";
      showError(email, copy.email, { format: true });
    } else {
      controls.forEach(validate);
    }
    showSubmitError();
  } else if (previewState === "loading") {
    if (window.matchMedia("(max-width: 767px)").matches) {
      form.querySelector("#inquiry-type").value = "consultation";
    }
    setLoading(true);
  } else if (previewState === "success") {
    showSuccess();
  }
})();
