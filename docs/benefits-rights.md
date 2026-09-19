# Benefits & Rights Navigator

## Purpose

The Benefits & Rights Navigator answers:

> **What programs, benefits, tax treatment, health coverage, rights, and support may apply to my situation—and where is the official source?**

This is not a universal “Native benefits” list. Legal and program eligibility differs by claimant class, province/territory, reserve context, Nation/treaty/land claim, age, student/employment/business situation, and the rules of each program.

Go Native never decides Indigenous identity or official entitlement.

## User-facing result states

Every benefit should use one of these states:

- **Available now**
- **May qualify**
- **Application required**
- **Status required**
- **Treaty / Nation / land-claim specific**
- **Official confirmation needed**
- **Verify current rules**

Primary actions:

- **Get it** — official program/application link
- **Do I qualify?** — plain-language AI explanation of the published rules
- **I already applied** — create/attach a personal case and reminders

## Claimant context

Do not use a single boolean such as isNative.

Model explicit user-chosen context such as:

- registered First Nations
- entitled-to-registration question / not yet determined
- recognized Inuit land-claim beneficiary
- Métis citizenship/program context
- Nation/community citizenship or membership
- treaty/land-claim beneficiary context
- unknown / prefer not to say

The product must never infer these categories from name, appearance, location, family, or browsing behavior.

## National starting points

### Non-Insured Health Benefits (NIHB)

For eligible registered First Nations and recognized Inuit, NIHB can cover benefit areas including pharmacy, dental, vision, medical supplies/equipment, mental-health counselling, and medical transportation when not otherwise covered.

Official source:
https://www.sac-isc.gc.ca/eng/1576790320164/1576790364553

### Section 87 tax treatment

Registered First Nations may qualify for tax exemption when Indian Act section 87 rules are satisfied, including qualifying property/income situated on a reserve. This is not a universal “no income tax / no sales tax” rule.

Official sources:
https://www.canada.ca/en/revenue-agency/services/indigenous-peoples.html
https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-indigenous-peoples.html

### Education support

The registry should include official post-secondary and preparation programs where applicable, plus Nation/community, provincial, school, foundation, and corporate scholarships.

ISC entry point:
https://www.sac-isc.gc.ca/

### Justice resources

Indigenous Courtwork services and Gladue-related resources should be routed by jurisdiction. Gladue requires Indigenous circumstances to be considered in sentencing; it does not create an automatic percentage reduction.

Official sources:
https://www.justice.gc.ca/eng/fund-fina/gov-gouv/acp-apc/index.html
https://www.justice.gc.ca/eng/rp-pr/jr/gladue2/background-contexte.html

The app should route users to legal aid, Indigenous Courtwork, Gladue services, Indigenous Justice Centres/organizations, and lawyer referral resources by jurisdiction.

## Initial province / territory registry

This is a seed catalog, not an exhaustive entitlement table. Every record needs its own current official source and last-verified date.

| Jurisdiction | Seed benefit/right examples | Official starting point |
| --- | --- | --- |
| Ontario | 8% Ontario HST point-of-sale relief on qualifying purchases for eligible Status First Nations; reserve/federal tax rules; treaty/Aboriginal harvesting contexts; Indigenous justice resources | https://www.ontario.ca/document/harmonized-sales-tax-hst/hst-ontario-first-nations-rebate |
| British Columbia | PST exemption for qualifying purchases by eligible First Nations under provincial rules; treaty/harvesting and Indigenous justice resources | https://www2.gov.bc.ca/gov/content/taxes/sales-taxes/pst/exemptions/first-nation |
| Alberta | Alberta Indian Tax Exemption: qualifying on-reserve fuel, tobacco, and accommodation for eligible consumers; other rights vary by context | https://www.alberta.ca/alberta-indian-tax-exemption |
| Saskatchewan | On-reserve PST exemption for eligible Status First Nations; First Nations Fuel and Tobacco Tax Refund Program; treaty/Aboriginal harvesting rules | https://www.saskatchewan.ca/residents/first-nations-citizens/tax-programs-for-first-nations-citizens |
| Manitoba | Retail sales tax exemption in qualifying reserve/delivery circumstances; federal section 87 rules; treaty/harvesting and justice resources | https://www.gov.mb.ca/finance/taxation/pubs/bulletins/taxexemption.pdf |
| Quebec | GST/QST relief on qualifying reserve transactions and provincial First Nations consumption/fuel-tax administration; treaty/land-claim rights can add specific programs | https://www.revenuquebec.ca/en/citizens/your-situation/first-nations-members/consumption-taxes-first-nations/ |
| New Brunswick | Federal reserve tax relief plus provincial vehicle-tax treatment for qualifying Status First Nation transactions; Indigenous Courtwork/Gladue services | https://www2.gnb.ca/content/dam/gnb/Departments/fin/pdf/Taxes-Impots/pvt-tpv/PVTB-108.pdf |
| Nova Scotia | Nova Scotia Indigenous Fuel Tax Exemption program for eligible Status First Nations buying fuel on reserve; Mi'kmaq treaty rights and justice resources require context | https://www.novascotia.ca/programs-and-services/nova-scotia-indigenous-fuel-tax-exemption-program-nsifte-consumers |
| Prince Edward Island | Retail Sales Tax exemption on qualifying designated property when Status First Nation purchase/delivery conditions are met; federal reserve rules and justice resources | https://www.princeedwardisland.ca/en/information/finance/retail-sales-tax-exemption-first-nations |
| Newfoundland & Labrador | Federal reserve tax rules; provincial insurance-premium exemptions can apply to qualifying Status First Nation property/risks situated wholly on reserve; Nunatsiavut/Innu/First Nation contexts have distinct agreements/programs | https://www.gov.nl.ca/fin/faq/faq-retail-sales-tax-on-inspremiums/ |
| Yukon | Subsistence harvesting rights can remove ordinary licence requirements where the person holds the right and the harvest is within scope; Final Agreements and Nation-specific rules matter | https://yukon.ca/en/outdoor-recreation-and-wildlife/hunting-and-trapping/learn-about-subsistence-harvest-rights-yukon |
| Northwest Territories | Aboriginal/treaty/land-claim harvesting rules, including no trap licence where a person holds the relevant right; General Hunting Licence rules are context-specific | https://www.gov.nt.ca/ecc/en/services/trapping-and-harvesting |
| Nunavut | NIHB coverage for eligible Inuit/registered First Nations and medical-travel support for eligible Inuit; Nunavut Agreement rights and beneficiary programs are context-specific | https://www.gov.nu.ca/en/health/non-insured-health-benefits-coverage-nihb |

## Product categories

Benefits should be indexed under:

- Health
- Dental
- Vision
- Mental health
- Medical travel
- Education
- Scholarships / bursaries
- Tax
- Housing
- Family / child
- Business / entrepreneurship
- Employment / training
- Legal / justice
- Harvesting / treaty rights
- Land-claim / beneficiary programs
- Seniors
- Youth
- Disability
- Community services
- Emergency support

## Data and UX rules

1. Show the official source before or beside the action.
2. Show **Last verified**.
3. Explain who the published rule applies to.
4. Do not convert a program description into a guaranteed entitlement.
5. Do not generalize Status First Nation rules to Inuit or Métis people, or vice versa.
6. Do not generalize treaty/land-claim rights across Nations or territories.
7. Allow users to save benefits and track applications just like opportunities.
8. Re-verify time-sensitive amounts, forms, and tax rules on a schedule.
9. Prefer official government/Nation/program-owner sources.
10. Provide a correction/report flow.

## Legal-language guardrail

Go Native must not present Indigenous sentencing principles as an automatic percentage discount. The legal-help feature should route users to qualified legal resources and official information rather than promise an outcome.
