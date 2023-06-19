const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const router = express.Router();

const ctrl = require("../../controllers/auth");

const { schemas } = require("../../models/user");

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
    "/verify",
    validateBody(schemas.validationEmailUser),
    ctrl.resendVerifyEmail
  );

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
