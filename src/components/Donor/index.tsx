import React, { useState, useEffect } from 'react';
import { Tabs } from '../Tabs';
import { Button } from '../Button';
import { Textfield } from '../Textfield';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';
import styles from './styles.module.css';

export interface DonorAmount {
  value: number;
  label: string;
}

export interface DonorProps {
  /** Color theme variant */
  'data-color'?: 'primary' | 'neutral';
  /** Preset donation amounts */
  amounts?: DonorAmount[];
  /** Default selected amount (value) */
  defaultAmount?: number;
  /** Tab labels */
  oneTimeLabel?: string;
  monthlyLabel?: string;
  /** Custom amount placeholder */
  customAmountPlaceholder?: string;
  /** Amount selection label */
  amountLabel?: string;
  /** Impact message template — use {amount} as placeholder for the selected amount */
  impactMessage?: string;
  /** Vipps button label (text before logo) */
  vippsButtonLabel?: string;
  /** Avtalegiro link label */
  avtalegiroLabel?: string;
  /** Avtalegiro link href */
  avtalegiroHref?: string;
  /** Currency suffix (e.g. "kr") */
  currencySuffix?: string;
  /** Callback when Vipps button is clicked — receives selected amount and frequency */
  onVippsClick?: (amount: number, frequency: 'one-time' | 'monthly') => void;
  /** Callback when avtalegiro link is clicked */
  onAvtalegiroClick?: () => void;
  /** Callback when amount changes */
  onAmountChange?: (amount: number, frequency: 'one-time' | 'monthly') => void;
  /** Show/hide the Vipps button */
  showVippsButton?: boolean;
  /** Show/hide the avtalegiro link */
  showAvtalegiroLink?: boolean;
  /** Show/hide the impact message */
  showImpactMessage?: boolean;
  /** Heart icon variant for the impact message */
  heartVariant?: 'filled' | 'outlined';
}

// Filled heart SVG (red, for impact row)
const HeartFilledIcon = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19.2905 18.125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13.7703 0C15.2893 5.94513e-05 16.5938 0.76302 17.6755 1.84473C20.0479 4.2172 19.8818 8.19893 16.6755 11.4053L10.1765 17.9043C10.0359 18.0449 9.84412 18.1249 9.64527 18.125C9.44642 18.125 9.25564 18.0458 9.115 17.9053L2.615 11.4053C-0.591399 8.19889 -0.757477 4.21721 1.615 1.84473C2.69673 0.763025 4.00125 0 5.52027 0C6.86917 5.33075e-05 8.24623 0.601427 9.64527 1.84375C11.0443 0.601491 12.4214 0 13.7703 0Z"
      fill="#B42419"
    />
  </svg>
);

// Stroke heart SVG (for monthly tab)
const HeartStrokeIcon = () => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 25.721 24.166"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M18.3605 0C20.3858 2.70913e-05 22.1252 1.01674 23.5675 2.45898C26.7308 5.62229 26.5097 10.9318 22.2345 15.207L13.5685 23.873C13.381 24.0605 13.1256 24.166 12.8605 24.166C12.5953 24.166 12.341 24.0606 12.1535 23.873L3.48648 15.207C-0.78872 10.9319 -1.00983 5.6223 2.15347 2.45898C3.59576 1.01676 5.33517 -7.94691e-07 7.3605 0C9.15905 2.54762e-05 10.9951 0.801582 12.8605 2.45801C14.7259 0.801611 16.562 0 18.3605 0ZM18.3605 2C17.0526 2 15.4585 2.64907 13.5675 4.54004C13.38 4.72756 13.1257 4.83299 12.8605 4.83301C12.5953 4.83301 12.341 4.72755 12.1535 4.54004C10.2625 2.64908 8.6684 2.00003 7.3605 2C6.05266 2 4.7918 2.64884 3.56753 3.87305C1.39752 6.04307 1.17573 10.0682 4.90054 13.793L12.8605 21.752L20.8205 13.793C24.5452 10.0682 24.3235 6.04306 22.1535 3.87305C20.9292 2.64881 19.6683 2.00003 18.3605 2Z"
      fill="#D52B1E"
    />
  </svg>
);

// Vipps logo SVG (white wordmark)
const VippsLogo = () => (
  <svg
    width="64"
    height="16"
    viewBox="0 0 64 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M34.0879 0C36.392 2.1216e-05 39.0869 1.89904 39.0869 5.95996C39.0868 10.2022 36.4949 12.2627 33.8408 12.2627C32.4216 12.2627 31.1671 11.7169 30.2002 10.4238V16H27.2998V0.323242H30.2002V1.91895C31.0027 0.82803 32.2573 0 34.0879 0ZM48.0156 0C50.3197 0.000234933 53.0137 1.89927 53.0137 5.95996C53.0136 10.2021 50.4223 12.2625 47.7686 12.2627C46.3493 12.2627 45.0939 11.7169 44.127 10.4238V16H41.2266V0.323242H44.1279V1.91895C44.9302 0.828069 46.185 0 48.0156 0ZM12.2402 6.58594C12.7958 6.20212 13.5569 6.36346 14.0508 7.09082C15.285 8.86842 16.8693 10.081 18.9053 10.0811L19.2695 10.0693C21.0418 9.95993 22.0986 9.0452 23.1016 7.75781C23.6771 7.01059 24.4387 6.86826 24.9531 7.27246C25.5084 7.69677 25.5289 8.46462 24.9531 9.21191C23.4106 11.2322 21.4357 12.4443 18.9053 12.4443C16.1488 12.4443 13.7835 10.9494 12.0762 8.38379C11.6033 7.71699 11.726 6.94964 12.2402 6.58594ZM59.1445 0C61.5312 0 63.2798 1.09116 64 3.83887L61.3877 4.24219C61.3465 2.84847 60.4618 2.42489 59.207 2.4248C58.2195 2.4248 57.499 2.84883 57.499 3.51562C57.4992 4.04069 57.8697 4.58616 58.9805 4.78809L60.9756 5.15137C62.9298 5.51551 63.9795 6.76793 63.9795 8.48535C63.9792 11.0102 61.6543 12.2627 59.4736 12.2627C57.1698 12.2626 54.6192 11.0904 54.208 8.24219L56.8203 7.83789C56.9644 9.31277 57.8903 9.83881 59.3711 9.83887C60.5024 9.83887 61.2636 9.43452 61.2637 8.72754C61.2637 8.10123 60.9141 7.63618 59.6797 7.41406L57.8691 7.09082C55.9565 6.74715 54.7842 5.41356 54.7842 3.7168C54.7844 1.09068 57.211 7.8171e-05 59.1445 0ZM5.9248 8.16113L8.63965 0.302734H11.8281L7.09668 11.959H4.73145L0 0.302734H3.18848L5.9248 8.16113ZM33.1826 2.50488C31.5988 2.50497 30.2003 3.61605 30.2002 6.10059C30.2002 8.4844 31.5987 9.73711 33.1621 9.7373C34.643 9.7373 36.166 8.56534 36.166 6.10059C36.1659 3.67634 34.6431 2.50488 33.1826 2.50488ZM47.1104 2.50488C45.5265 2.50488 44.1271 3.61595 44.127 6.10059C44.127 8.48459 45.5262 9.7373 47.0898 9.7373C48.5708 9.73729 50.0928 8.56533 50.0928 6.10059C50.0926 3.67645 48.5708 2.50499 47.1104 2.50488ZM21.0039 2.06055C21.8679 2.06067 22.6084 2.70741 22.6084 3.63672L22.5996 3.80762C22.5149 4.64394 21.8138 5.2118 21.0039 5.21191C20.1401 5.21191 19.3996 4.56573 19.3994 3.63672C19.3994 2.70732 20.14 2.06055 21.0039 2.06055Z"
      fill="white"
    />
  </svg>
);

const DEFAULT_AMOUNTS: DonorAmount[] = [
  { value: 220, label: '220 kr' },
  { value: 345, label: '345 kr' },
  { value: 660, label: '660 kr' },
];

export const Donor = ({
  'data-color': dataColor = 'primary',
  amounts = DEFAULT_AMOUNTS,
  defaultAmount = 345,
  oneTimeLabel = 'En gang',
  monthlyLabel = 'Hver måned',
  customAmountPlaceholder = 'Valgfritt beløp',
  amountLabel = 'Velg ønsket beløp:',
  impactMessage = 'En gave på {amount} bidrar til ...',
  vippsButtonLabel = 'Gi med',
  avtalegiroLabel = 'Gi med avtalegiro',
  avtalegiroHref = '#',
  currencySuffix = 'kr',
  onVippsClick,
  onAvtalegiroClick,
  onAmountChange,
  showVippsButton = true,
  showAvtalegiroLink = true,
  showImpactMessage = true,
  heartVariant = 'outlined',
}: DonorProps) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(defaultAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);

  // Fallback: inject minimal donor styles if consumer did not import the CSS bundle.
  useEffect(() => {
    const styleId = 'rk-donor-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

  const activeAmount = isCustom && customAmount
    ? parseInt(customAmount, 10) || 0
    : selectedAmount;

  const handlePresetClick = (value: number) => {
    setSelectedAmount(value);
    setIsCustom(false);
    setCustomAmount('');
    onAmountChange?.(value, frequency);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setIsCustom(true);
    const parsed = parseInt(val, 10);
    if (parsed > 0) {
      onAmountChange?.(parsed, frequency);
    }
  };

  const handleCustomAmountFocus = () => {
    setIsCustom(true);
  };

  const handleTabChange = (value: string) => {
    const freq = value as 'one-time' | 'monthly';
    setFrequency(freq);
    onAmountChange?.(activeAmount, freq);
  };

  const handleVippsClick = () => {
    onVippsClick?.(activeAmount, frequency);
  };

  const handleAvtalegiroClick = () => {
    onAvtalegiroClick?.();
  };

  // Render impact message with bold amount
  const renderImpactMessage = () => {
    const amountStr = `${activeAmount} ${currencySuffix}`;
    const parts = impactMessage.split('{amount}');
    return (
      <span>
        {parts[0]}
        <span className={styles.impactAmount}>{amountStr}</span>
        {parts[1] || ''}
      </span>
    );
  };

  return (
    <div className={styles.donor} data-color={dataColor}>
      {/* Tabs */}
      <div className={styles.tabsWrapper}>
        <Tabs defaultValue="monthly" onChange={handleTabChange} data-size="md">
          <Tabs.List>
            <Tabs.Tab value="one-time">
              {oneTimeLabel}
            </Tabs.Tab>
            <Tabs.Tab value="monthly">
              <span className={styles.tabHeartIcon}>
                <HeartFilledIcon />
              </span>
              {monthlyLabel}
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Amount selection */}
        <div className={styles.amountSection}>
          <Paragraph className={styles.amountLabel} data-size="sm">
            {amountLabel}
          </Paragraph>

          <div className={styles.amountButtons}>
            {amounts.map((amount) => {
              const isSelected = !isCustom && selectedAmount === amount.value;
              return (
                <Button
                  key={amount.value}
                  variant={isSelected ? 'primary' : 'secondary'}
                  data-color={isSelected ? 'accent' : 'neutral'}
                  onClick={() => handlePresetClick(amount.value)}
                >
                  {amount.label}
                </Button>
              );
            })}
          </div>

          <div className={styles.customAmountField}>
            <Textfield
              placeholder={customAmountPlaceholder}
              value={customAmount}
              onChange={handleCustomAmountChange}
              onFocus={handleCustomAmountFocus}
              type="number"
              min={1}
            />
          </div>
        </div>

        {/* Impact message */}
        {showImpactMessage && (
          <div className={styles.impactRow}>
            <div className={styles.heartIcon}>
              {heartVariant === 'filled' ? <HeartFilledIcon /> : <HeartStrokeIcon />}
            </div>
            <p className={styles.impactText}>
              {renderImpactMessage()}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className={styles.actionsSection}>
          {showVippsButton && (
            <button
              className={styles.vippsButton}
              onClick={handleVippsClick}
              type="button"
              aria-label={`${vippsButtonLabel} Vipps`}
            >
              <span className={styles.vippsButtonLabel}>{vippsButtonLabel}</span>
              <span className={styles.vippsLogo}>
                <VippsLogo />
              </span>
            </button>
          )}

          {showAvtalegiroLink && (
            <Link
              href={avtalegiroHref}
              data-color="neutral"
              className={styles.avtalegiroLink}
              onClick={(e: React.MouseEvent) => {
                if (onAvtalegiroClick) {
                  e.preventDefault();
                  handleAvtalegiroClick();
                }
              }}
            >
              {avtalegiroLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Fallback CSS injection function
function buildInlineCss(s: Record<string, string>): string {
  return `
.${s.donor} {
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--ds-color-primary-color-red-surface-default, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 344px;
  padding-top: var(--ds-size-2, 8px);
}
.${s.tabsWrapper} {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
}
.${s.tabsWrapper} [role="tablist"] {
  display: flex !important;
  width: 100% !important;
}
.${s.tabsWrapper} [role="tab"] {
  flex: 1 1 50% !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center;
  white-space: nowrap;
}
.${s.content} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-6, 24px);
  align-items: center;
  justify-content: center;
  padding: var(--ds-size-6, 24px);
  width: 100%;
  box-sizing: border-box;
}
.${s.amountSection} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
  align-items: flex-start;
  width: 296px;
}
.${s.amountLabel} {
  font-weight: var(--ds-font-weight-regular, 400);
  font-size: var(--ds-font-size-3, 16px);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #333333);
  margin: 0;
}
.${s.amountButtons} {
  display: flex;
  gap: var(--ds-size-2, 8px);
  align-items: flex-start;
  width: 100%;
}
.${s.amountButtons} > button {
  flex: 1;
}
.${s.customAmountField} {
  width: 100%;
}
.${s.impactRow} {
  display: flex;
  gap: var(--ds-size-3, 12px);
  align-items: center;
  width: 296px;
  min-height: 48px;
}
.${s.heartIcon} {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.${s.heartIcon} svg {
  width: 19px;
  height: 18px;
}
.${s.impactText} {
  flex: 1;
  font-weight: var(--ds-font-weight-regular, 400);
  font-size: var(--ds-font-size-3, 16px);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #333333);
  margin: 0;
}
.${s.impactAmount} {
  font-weight: var(--ds-font-weight-semibold, 600);
}
.${s.actionsSection} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
  align-items: center;
  justify-content: center;
  width: 296px;
}
.${s.vippsButton} {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 44px;
  padding: 12px 16px;
  background-color: #ff5b24;
  border: none;
  border-radius: var(--ds-border-radius-xl, 12px);
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.15s ease;
  font-family: inherit;
}
.${s.vippsButton}:hover {
  opacity: 0.9;
}
.${s.vippsButton}:active {
  opacity: 0.8;
}
.${s.vippsButton}:focus-visible {
  outline: 2px solid var(--ds-color-neutral-border-default, #797979);
  outline-offset: 2px;
}
.${s.vippsButtonLabel} {
  font-family: inherit;
  font-weight: 700;
  font-size: 18.5px;
  line-height: 1;
  color: #ffffff;
  white-space: nowrap;
}
.${s.vippsLogo} {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
}
.${s.vippsLogo} svg {
  width: 64px;
  height: 16px;
}
.${s.avtalegiroLink} {
  text-align: center;
}
.${s.tabHeartIcon} {
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
  vertical-align: middle;
}
.${s.tabHeartIcon} svg {
  width: 16px;
  height: 15px;
}
`;
}
