/**
 * Requests a share URL for provided Dynamic Scenario.
 *
 * @param {DynamicScenario} dynamicScenario
 * @param {string} pem
 * @param {string} sdkId
 *
 * @returns {Promise} containing a ShareUrlResult
 */
export function createShareUrl(dynamicScenario: DynamicScenario, pem: string, sdkId: string): Promise<any>;
import DynamicScenarioBuilder = require("./dynamic.scenario.builder");
import DynamicPolicyBuilder = require("./policy/dynamic.policy.builder");
import WantedAttributeBuilder = require("./policy/wanted.attribute.builder");
import ExtensionBuilder = require("./extension/extension.builder");
import LocationConstraintExtensionBuilder = require("./extension/location.constraint.extension.builder");
import TransactionalFlowExtensionBuilder = require("./extension/transactional.flow.extension.builder");
import ThirdPartyAttributeExtensionBuilder = require("./extension/third.party.attribute.extension.builder");
import WantedAnchorBuilder = require("./policy/wanted.anchor.builder");
import ConstraintsBuilder = require("./policy/constraints.builder");
import SourceConstraintBuilder = require("./policy/source.constraint.builder");
import DynamicScenario = require("./dynamic.scenario");
export { DynamicScenarioBuilder, DynamicPolicyBuilder, WantedAttributeBuilder, ExtensionBuilder, LocationConstraintExtensionBuilder, TransactionalFlowExtensionBuilder, ThirdPartyAttributeExtensionBuilder, WantedAnchorBuilder, ConstraintsBuilder, SourceConstraintBuilder };
