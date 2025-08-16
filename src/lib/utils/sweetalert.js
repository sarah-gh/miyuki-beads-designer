import Swal from 'sweetalert2';

// Success alert
export const showSuccess = (
  title = 'Success!',
  message = 'Operation completed successfully',
) => {
  return Swal.fire({
    icon: 'success',
    title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#10b981',
  });
};

// Error alert
export const showError = (
  title = 'Error!',
  message = 'Something went wrong',
) => {
  return Swal.fire({
    icon: 'error',
    title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#ef4444',
  });
};

// Warning alert
export const showWarning = (
  title = 'Warning!',
  message = 'Please check your input',
) => {
  return Swal.fire({
    icon: 'warning',
    title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#f59e0b',
  });
};

// Info alert
export const showInfo = (
  title = 'Info',
  message = 'Here is some information',
) => {
  return Swal.fire({
    icon: 'info',
    title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#3b82f6',
  });
};

// Confirmation dialog
export const showConfirm = (
  title = 'Are you sure?',
  message = 'This action cannot be undone',
) => {
  return Swal.fire({
    title,
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#10b981',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'بله، ادامه بده',
    cancelButtonText: 'لغو',
  });
};

// Custom alert with options
export const showCustom = (options) => {
  return Swal.fire({
    confirmButtonColor: '#10b981',
    cancelButtonColor: '#6b7280',
    ...options,
  });
};

// Input prompt
export const showInput = (
  title = 'Enter value',
  inputLabel = 'Value',
  inputPlaceholder = 'Type here...',
) => {
  return Swal.fire({
    title,
    inputLabel,
    input: 'text',
    inputPlaceholder,
    showCancelButton: true,
    confirmButtonColor: '#10b981',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'ثبت',
    cancelButtonText: 'لغو',
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!';
      }
    },
  });
};

// Loading state
export const showLoading = (title = 'Loading...') => {
  Swal.fire({
    title,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

// Close loading
export const closeLoading = () => {
  Swal.close();
};

// Toast notification
export const showToast = (message, icon = 'success', position = 'top-end') => {
  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon,
    title: message,
  });
};

export default Swal;
