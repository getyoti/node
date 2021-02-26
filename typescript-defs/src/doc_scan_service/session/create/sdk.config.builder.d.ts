export = SdkConfigBuilder;
/**
 * Builder to assist in the creation of {@link SdkConfig}.
 *
 * @class SdkConfigBuilder
 */
declare class SdkConfigBuilder {
    /**
     * Sets the allowed capture method to "CAMERA"
     *
     * @returns {this}
     */
    withAllowsCamera(): this;
    /**
     * Sets the allowed capture method to "CAMERA_AND_UPLOAD"
     *
     * @returns {this}
     */
    withAllowsCameraAndUpload(): this;
    /**
     * Sets the allowed capture method
     *
     * @param {string} allowedCaptureMethod the allowed capture method
     *
     * @returns {this}
     */
    withAllowedCaptureMethods(allowedCaptureMethods: any): this;
    allowedCaptureMethods: any;
    /**
     * Sets the primary colour to be used by the web/native client
     *
     * @param {string} primaryColour
     *   The primary colour, hexadecimal value e.g. #ff0000
     *
     * @returns {this}
     */
    withPrimaryColour(primaryColour: string): this;
    primaryColour: string;
    /**
     * Sets the secondary colour to be used by the web/native client (used on the button)
     *
     * @param {string} secondaryColour
     *   The secondary colour, hexadecimal value e.g. #ff0000
     *
     * @returns {this}
     */
    withSecondaryColour(secondaryColour: string): this;
    secondaryColour: string;
    /**
     * Sets the font colour to be used by the web/native client (used on the button)
     *
     * @param {string} fontColour
     *   The font colour
     *
     * @returns {this}
     */
    withFontColour(fontColour: string): this;
    fontColour: string;
    /**
     * Sets the locale on the builder
     *
     * @param {string} locale
     *   The locale, e.g. "en"
     *
     * @returns {this}
     */
    withLocale(locale: string): this;
    locale: string;
    /**
     * Sets the preset issuing country on the builder
     *
     * @param {string} presetIssuingCountry the preset issuing country
     *
     * @returns {this}
     */
    withPresetIssuingCountry(presetIssuingCountry: string): this;
    presetIssuingCountry: string;
    /**
     * Sets the success URL for the redirect that follows the web/native client
     * uploading documents successfully
     *
     * @param {string} successUrl the success URL
     *
     * @returns {this}
     */
    withSuccessUrl(successUrl: string): this;
    successUrl: string;
    /**
     * Sets the error URL for the redirect that follows the web/native client
     * uploading documents unsuccessfully
     *
     * @param {string} errorUrl the error URL
     *
     * @returns {this}
     */
    withErrorUrl(errorUrl: string): this;
    errorUrl: string;
    /**
     * Sets the privacy policy URL
     *
     * @param {string} privacyPolicyUrl the privacy policy URL
     *
     * @returns {this}
     */
    withPrivacyPolicyUrl(privacyPolicyUrl: string): this;
    privacyPolicyUrl: string;
    /**
     * Builds the {@link SdkConfig} using the values supplied to the builder
     *
     * @returns {SdkConfig}
     */
    build(): SdkConfig;
}
import SdkConfig = require("./sdk.config");
