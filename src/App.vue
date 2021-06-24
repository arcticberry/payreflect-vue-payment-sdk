<template>
  <base-modal>
    <div class="p-3">
      <div class="flex justify-between">
        <h1 class="card">Card payments</h1>
        <p>Payment options</p>
      </div>
      <div class="modal-button">
        <div class="flex items-center">
          <base-icon name="paystack"></base-icon>
          <p class="ml-4 flex flex-col">
            Pay with Paystack
            <span>
              NGN 10.00 fee
            </span>
          </p>
        </div>
        <base-icon name="chevron-right"></base-icon>
      </div>
      <div class="modal-button">
        <div class="flex items-center">
          <base-icon name="flutterwave"></base-icon>
          <p class="ml-4 flex flex-col">
            Pay with Flutterwave
            <span>
              NGN 10.00 fee
            </span>
          </p>
        </div>
        <base-icon name="chevron-right"></base-icon>
      </div>
      <div class="modal-button">
        <div class="flex items-center">
          <base-icon name="monify"></base-icon>
          <p class="ml-4 flex flex-col">
            Pay with Monnify
            <span>
              No payment fees
            </span>
          </p>
        </div>
        <base-icon name="chevron-right"></base-icon>
      </div>
    </div>
  </base-modal>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Poppins", sans-serif;
}
.modal-button {
  width: 100%;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 27, 46, 0.06);
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.card {
  /* Body / Body 2 - SemiBold */

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #496179;
}

.card + p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;

  color: #d3d4d8;
}

p {
  span {
    font-size: 10px;
  }
}
</style>
