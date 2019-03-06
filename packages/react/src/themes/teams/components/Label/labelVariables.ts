import { pxToRem, getColorSchemeWithCustomDefaults } from '../../../../lib'
import { ColorValues, ColorScheme, SiteVariablesPrepared } from '../../../types'

type LabelColorScheme = Pick<ColorScheme, 'foreground' | 'background'>

export interface LabelVariables {
  colorScheme: ColorValues<LabelColorScheme>
  circularRadius: string
  padding: string
  startPaddingLeft: string
  endPaddingRight: string
  height: string
  iconColor: string

  badgeHeight: string
  badgeLineheight: string
  badgeColor: string
  badgeBackgroundColor: string
  badgeBorderRadius: string
  badgePadding: string
  badgePaddingWithoutAdditionalContent: string
  badgePaddingWithoutIcon: string
  badgeIconMargin: string
  additionalContentBorderColor: string
  additionalContentLeftBorder: string
  additionalContentMarginLeft: string
  additionalContentPaddingLeft: string
}

export default (siteVars: SiteVariablesPrepared): LabelVariables => {
  const color = 'rgba(0, 0, 0, 0.6)'

  return {
    colorScheme: getColorSchemeWithCustomDefaults(siteVars.colorScheme, {
      foreground: color,
      background: 'rgb(232, 232, 232)',
    }),
    circularRadius: pxToRem(9999),
    padding: `0 ${pxToRem(4)} 0 ${pxToRem(4)}`,
    startPaddingLeft: '0px',
    endPaddingRight: '0px',
    height: pxToRem(20),

    // variables for 'icon' part
    iconColor: color,

    // Label type: Badge
    badgeHeight: pxToRem(24),
    badgeLineheight: pxToRem(24),
    badgeColor: siteVars.colors.black,
    badgeBackgroundColor: siteVars.gray10,
    badgeBorderRadius: pxToRem(2),
    badgePadding: `0 ${pxToRem(8)}`,
    badgePaddingWithoutAdditionalContent: `0 ${pxToRem(10)} 0 ${pxToRem(8)}`,
    badgePaddingWithoutIcon: `0 ${pxToRem(10)}`,
    badgeIconMargin: pxToRem(5),
    additionalContentBorderColor: siteVars.gray06,
    additionalContentLeftBorder: `solid ${pxToRem(1)}`,
    additionalContentMarginLeft: pxToRem(6),
    additionalContentPaddingLeft: pxToRem(6),
  }
}