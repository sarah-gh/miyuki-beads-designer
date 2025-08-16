# SweetAlert2 Integration Guide

## Overview

This project now includes SweetAlert2, a beautiful, responsive, customizable replacement for JavaScript's popup boxes.

## Installation

SweetAlert2 has been installed and is available as a dependency in your project.

## Usage

### Basic Import

```javascript
import Swal from 'sweetalert2';
```

### Using Utility Functions

We've created utility functions in `src/lib/utils/sweetalert.js` for common use cases:

```javascript
import {
  showSuccess,
  showError,
  showWarning,
  showInfo,
  showConfirm,
  showInput,
  showLoading,
  closeLoading,
  showToast,
  showCustom,
} from '@/lib/utils/sweetalert';
```

### Examples

#### Success Alert

```javascript
await showSuccess('Great job!', 'Operation completed successfully');
```

#### Error Alert

```javascript
await showError('Oops!', 'Something went wrong');
```

#### Confirmation Dialog

```javascript
const result = await showConfirm(
  'Delete item?',
  'This action cannot be undone',
);
if (result.isConfirmed) {
  // User clicked "Yes, proceed!"
  // Perform deletion
}
```

#### Input Prompt

```javascript
const result = await showInput('Enter your name', 'Name', 'John Doe');
if (result.isConfirmed) {
  console.log('User entered:', result.value);
}
```

#### Loading State

```javascript
showLoading('Processing your request...');
// Perform async operation
closeLoading();
```

#### Toast Notification

```javascript
showToast('This is a toast notification!', 'success', 'top-end');
```

#### Custom Alert

```javascript
await showCustom({
  title: 'Custom Alert',
  html: '<p>This is a custom alert with HTML content.</p>',
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Awesome!',
  cancelButtonText: 'Not impressed',
});
```

## Demo Component

A demo component has been created at `src/components/SweetAlertDemo.vue` that showcases all the available functions.

## Route

The demo is accessible at `/sweetalert-demo` route.

## Customization

You can customize the appearance by modifying the utility functions in `src/lib/utils/sweetalert.js` or by using the `showCustom` function with your own options.

## SweetAlert2 Documentation

For more advanced features and customization options, visit the [official SweetAlert2 documentation](https://sweetalert2.github.io/).

## Available Icons

- `success` - Green checkmark
- `error` - Red X
- `warning` - Yellow exclamation
- `info` - Blue information
- `question` - Purple question mark

## Available Positions for Toast

- `top-start`
- `top-end`
- `top-center`
- `center-start`
- `center`
- `center-end`
- `bottom-start`
- `bottom-center`
- `bottom-end`
