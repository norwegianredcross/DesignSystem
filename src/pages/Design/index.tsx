import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout, ArticleImage } from '../../components/ArticleLayout';
import styles from './styles.module.css';

// --- CONTENT COMPONENTS ---

const HvaErDesignTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.tokens.whatIsTitle')} category={t('design.sidebar.designTokens')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokens.whatIsText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokens.whatIsText2')}
      </Paragraph>
      <Paragraph>
        {t('design.tokens.whatIsText3')}
      </Paragraph>
    </ArticleLayout>
  );
};

const DesignTokensIFigmaContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.tokens.figmaTitle')} category={t('design.sidebar.designTokens')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokens.figmaText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokens.figmaText2')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokens.themesTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokens.themesText')}
      </Paragraph>
      
      <ArticleImage src="/ThemesExample.png" alt="Themes example" caption={t('design.tokens.themesCaption')} />
    </ArticleLayout>
  );
};

const FargerNavnestrukturContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.colorStructure.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorStructure.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorStructure.structureTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorStructure.structureText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorStructure.structureText2')}
      </Paragraph>
      
      <ArticleImage src="/ColorNameStructure.png" alt="Fargenavn struktur" caption={t('design.colorStructure.structureCaption')} />

      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('design.colorStructure.nameLabel')}</strong> {t('design.colorStructure.nameText')}</List.Item>
        <List.Item><strong>{t('design.colorStructure.groupLabel')}</strong> {t('design.colorStructure.groupText')}</List.Item>
      </List.Unordered>

      <ArticleImage src="/ColorScaleGroups.png" alt="Fargeskala grupper" caption={t('design.colorStructure.groupsCaption')} />

      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('design.colorStructure.variantLabel')}</strong> {t('design.colorStructure.variantText')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const FargerOversiktContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.colorOverview.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorOverview.intro')}
      </Paragraph>
      
      <ArticleImage src="/SemanticColorUsage.png" alt="Semantiske farger eksempel" caption={t('design.colorOverview.semanticCaption')} />

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 'var(--ds-size-8)' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--ds-color-neutral-border-default)', textAlign: 'left' }}>
            <th style={{ padding: 'var(--ds-size-2)', fontWeight: 'bold' }}>{t('design.colorOverview.tableName')}</th>
            <th style={{ padding: 'var(--ds-size-2)', fontWeight: 'bold' }}>{t('design.colorOverview.tableUsage')}</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['background-default', t('design.colorOverview.backgroundDefault')],
            ['background-tinted', t('design.colorOverview.backgroundTinted')],
            ['surface-default', t('design.colorOverview.surfaceDefault')],
            ['surface-tinted', t('design.colorOverview.surfaceTinted')],
            ['surface-hover', t('design.colorOverview.surfaceHover')],
            ['surface-active', t('design.colorOverview.surfaceActive')],
            ['border-subtle', t('design.colorOverview.borderSubtle')],
            ['border-default', t('design.colorOverview.borderDefault')],
            ['border-strong', t('design.colorOverview.borderStrong')],
            ['text-subtle', t('design.colorOverview.textSubtle')],
            ['text-default', t('design.colorOverview.textDefault')],
            ['base-default', t('design.colorOverview.baseDefault')],
            ['base-hover', t('design.colorOverview.baseHover')],
            ['base-active', t('design.colorOverview.baseActive')],
            ['base-contrast-subtle', t('design.colorOverview.baseContrastSubtle')],
            ['base-contrast-default', t('design.colorOverview.baseContrastDefault')],
          ].map(([name, desc]) => (
            <tr key={name} style={{ borderBottom: '1px solid var(--ds-color-neutral-border-subtle)' }}>
              <td style={{ padding: 'var(--ds-size-2)', fontFamily: 'monospace' }}>{name}</td>
              <td style={{ padding: 'var(--ds-size-2)' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorOverview.backgroundTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.backgroundText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Background-default</strong> {t('design.colorOverview.backgroundDefaultDesc')}</List.Item>
        <List.Item><strong>Background-tinted</strong> {t('design.colorOverview.backgroundTintedDesc')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorOverview.surfaceTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.surfaceText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Surface-default</strong> {t('design.colorOverview.surfaceDefaultDesc')}</List.Item>
        <List.Item><strong>Surface-tinted</strong> {t('design.colorOverview.surfaceTintedDesc')}</List.Item>
        <List.Item><strong>Surface-hover</strong> {t('design.colorOverview.surfaceHoverDesc')}</List.Item>
        <List.Item><strong>Surface-active</strong> {t('design.colorOverview.surfaceActiveDesc')}</List.Item>
      </List.Unordered>
      
      <ArticleImage src="/SurfaceTintedExample.png" alt="Surface-tinted eksempel" caption={t('design.colorOverview.surfaceTintedCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorOverview.borderTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.borderText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Border-subtle</strong> {t('design.colorOverview.borderSubtleDesc')}</List.Item>
        <List.Item><strong>Border-default</strong> {t('design.colorOverview.borderDefaultDesc')}</List.Item>
        <List.Item><strong>Border-strong</strong> {t('design.colorOverview.borderStrongDesc')}</List.Item>
      </List.Unordered>
      
      <ArticleImage src="/BordersColorsExample.png" alt="Border colors example" caption={t('design.colorOverview.bordersCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorOverview.textTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.textText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Text-subtle</strong> {t('design.colorOverview.textSubtleDesc')}</List.Item>
        <List.Item><strong>Text-default</strong> {t('design.colorOverview.textDefaultDesc')}</List.Item>
      </List.Unordered>
      
      <ArticleImage src="/TextColorsExample.png" alt="Text colors example" caption={t('design.colorOverview.textColorsCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.colorOverview.baseTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.baseText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.colorOverview.baseText2')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Base-default</strong> {t('design.colorOverview.baseDefaultDesc')}</List.Item>
        <List.Item><strong>Base-hover</strong> {t('design.colorOverview.baseHoverDesc')}</List.Item>
        <List.Item><strong>Base-active</strong> {t('design.colorOverview.baseActiveDesc')}</List.Item>
        <List.Item><strong>Base-contrast-subtle</strong> {t('design.colorOverview.baseContrastSubtleDesc')}</List.Item>
        <List.Item><strong>Base-contrast-default</strong> {t('design.colorOverview.baseContrastDefaultDesc')}</List.Item>
      </List.Unordered>
      
      <ArticleImage src="/BaseColorsExample.png" alt="Base colors example" caption={t('design.colorOverview.baseColorsCaption')} />
    </ArticleLayout>
  );
};

const FargeTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.colorTokens.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorTokens.intro')}
      </Paragraph>
      
      <ArticleImage src="/FargeTokensLight.png" alt="Farge tokens lys" caption={t('design.colorTokens.lightCaption')} />
      <ArticleImage src="/FargeTokensDark.png" alt="Farge tokens mørk" caption={t('design.colorTokens.darkCaption')} />
    </ArticleLayout>
  );
};

const SkyggerBrukContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.shadowUsage.title')} category={t('design.sidebar.shadows')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.shadowUsage.intro1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.shadowUsage.intro2')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.shadowUsage.strengthsTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.shadowUsage.strengthsText')}
      </Paragraph>
      
      <ArticleImage src="/ShadowExample.png" alt="Skygger eksempel" />
    </ArticleLayout>
  );
};

const SkyggeTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.shadowTokens.title')} category={t('design.sidebar.shadows')}>
      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.shadowTokens.tokensTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.shadowTokens.tokensText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.shadowTokens.exampleTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.shadowTokens.exampleText')}
      </Paragraph>
      
      <ArticleImage src="/ShadowTokensExample.png" alt="Popover skygge eksempel" caption={t('design.shadowTokens.exampleCaption')} />
    </ArticleLayout>
  );
};

const KomponentStorrelserContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.componentSizes.title')} category={t('design.sidebar.sizes')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.intro')}
      </Paragraph>
      
      <ArticleImage src="/ComponentSizesExample.png" alt="Komponentstørrelser eksempel" caption={t('design.componentSizes.sizesCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.componentSizes.smallTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.smallText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.componentSizes.mediumTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.mediumText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.componentSizes.largeTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.largeText')}
      </Paragraph>
      
      <ArticleImage src="/MediumComponentSizeExample.png" alt="Medium komponentstørrelse eksempel" caption={t('design.componentSizes.mediumSizeCaption')} />

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.harmonyText')}
      </Paragraph>
      
      <ArticleImage src="/MediumLargeComponentsExample.png" alt="Medium og Large komponenter" caption={t('design.componentSizes.combinedCaption')} />

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.consistencyText')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.componentSizes.combinationText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const StorrelseTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.sizeTokens.title')} category={t('design.sidebar.sizes')}>
      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.sizeTokens.tokensTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.sizeTokens.tokensText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.sizeTokens.exampleTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.sizeTokens.exampleText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const FontFamilyContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.fontFamily.title')} category={t('design.sidebar.typography')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.fontFamily.intro')}
      </Paragraph>
    </ArticleLayout>
  );
};

const TypografiTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.typoTokens.title')} category={t('design.sidebar.typography')}>
       <Paragraph>{t('design.typoTokens.comingSoon')}</Paragraph>
    </ArticleLayout>
  );
};

const FigmaOppkoblingContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.figmaConnect.title')} category={t('design.sidebar.getStarted')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.figmaConnect.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.figmaConnect.prerequisites')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.figmaConnect.prerequisitesIntro')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Figma</strong> - {t('design.figmaConnect.figmaAccount')}</List.Item>
        <List.Item><strong>Access</strong> - {t('design.figmaConnect.access')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.figmaConnect.createFile')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.figmaConnect.createFileText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.figmaConnect.activateLibraries')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.figmaConnect.goToAssets')}</List.Item>
        <List.Item>{t('design.figmaConnect.openLibrary')}</List.Item>
        <List.Item>{t('design.figmaConnect.enableLibraries')}
          <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
            <List.Item>{t('design.figmaConnect.libraryComponent')}</List.Item>
            <List.Item>{t('design.figmaConnect.libraryIcons')}</List.Item>
          </List.Unordered>
        </List.Item>
      </List.Ordered>
      <ArticleImage src="/LibraryActivationScreenshot.png" alt="Library Activation" caption={t('design.figmaConnect.libraryActivationCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.figmaConnect.insertComponents')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.figmaConnect.goToAssetsPanel')}</List.Item>
        <List.Item>{t('design.figmaConnect.useSearch')}
          <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
            <List.Item>Button</List.Item>
            <List.Item>Card</List.Item>
            <List.Item>Modal</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>{t('design.figmaConnect.dragComponent')}</List.Item>
        <List.Item>{t('design.figmaConnect.customizeComponent')}</List.Item>
      </List.Ordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.figmaConnect.tips')}</Heading>
      <Paragraph>
        {t('design.figmaConnect.tipsText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const OppstartContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.startup.title')} category={t('design.sidebar.getStarted')}>
      
      <Heading level={3} data-size="sm">{t('design.startup.step1Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.startup.step1Text1')}</Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step1Text2')}</Paragraph>
      <ArticleImage src="/OppstartStep1.png" alt={t('design.startup.step1Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step2Text')}</Paragraph>
      <ArticleImage src="/OppstartStep2.png" alt={t('design.startup.step2Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.startup.step3Text')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('design.startup.step3Token1')}</List.Item>
        <List.Item>{t('design.startup.step3Token2')}</List.Item>
        <List.Item>{t('design.startup.step3Token3')}</List.Item>
        <List.Item>{t('design.startup.step3Token4')}</List.Item>
      </List.Unordered>
      <ArticleImage src="/OppstartStep3.png" alt={t('design.startup.step3Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step4Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step4Text')}</Paragraph>
      <ArticleImage src="/OppstartStep4.png" alt={t('design.startup.step4Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step5Text')}</Paragraph>
      <ArticleImage src="/OppstartStep5.png" alt={t('design.startup.step5Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step6Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step6Text')}</Paragraph>
      <ArticleImage src="/OppstartStep6.png" alt={t('design.startup.step6Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step7Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step7Text')}</Paragraph>
      <ArticleImage src="/OppstartStep7.png" alt={t('design.startup.step7Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step8Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.startup.step8Text')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('design.startup.step8Token1')}</List.Item>
        <List.Item>{t('design.startup.step8Token2')}</List.Item>
        <List.Item>{t('design.startup.step8Token3')}</List.Item>
        <List.Item>{t('design.startup.step8Token4')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step8Note')}</Paragraph>
      <ArticleImage src="/OppstartStep8.png" alt={t('design.startup.step8Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step9Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step9Text')}</Paragraph>
      <ArticleImage src="/OppstartStep9.png" alt={t('design.startup.step9Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step10Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step10Text')}</Paragraph>
      <ArticleImage src="/OppstartStep10.png" alt={t('design.startup.step10Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step11Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.startup.step11Text1')}</Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step11Text2')}</Paragraph>
      <ArticleImage src="/OppstartStep11.png" alt={t('design.startup.step11Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step12Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step12Text')}</Paragraph>
      <ArticleImage src="/OppstartStep12.png" alt={t('design.startup.step12Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step13Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step13Text')}</Paragraph>
      <ArticleImage src="/OppstartStep13.png" alt={t('design.startup.step13Title')} />

      <Heading level={3} data-size="sm">{t('design.startup.step14Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.startup.step14Text')}</Paragraph>
      <ArticleImage src="/OppstartStep14.png" alt={t('design.startup.step14Title')} />
    </ArticleLayout>
  );
};

const LageKomponenterContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.newComponent.title')} category={t('design.sidebar.getStarted')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.tokensTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.newComponent.tokensText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.newComponent.tokensAutolayout')}</List.Item>
        <List.Item>{t('design.newComponent.tokensSize')}</List.Item>
        <List.Item>{t('design.newComponent.tokensSemantic')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.atomicTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.newComponent.atomicText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('design.newComponent.atomicAtoms')}</List.Item>
        <List.Item>{t('design.newComponent.atomicMolecules')}</List.Item>
        <List.Item>{t('design.newComponent.atomicOrganisms')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.atomicPrinciple')}
      </Paragraph>
      <ArticleImage src="/LageKompSteg1.png" alt={t('design.newComponent.atomicTitle')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.calendarTitle')}</Heading>
      
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep1Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.newComponent.calendarStep1Text')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('design.newComponent.calendarStep1TextLabel')}</strong> {t('design.newComponent.calendarStep1TextItems')}</List.Item>
        <List.Item><strong>{t('design.newComponent.calendarStep1IconLabel')}</strong> {t('design.newComponent.calendarStep1IconItems')}</List.Item>
        <List.Item><strong>{t('design.newComponent.calendarStep1ButtonLabel')}</strong> {t('design.newComponent.calendarStep1ButtonItems')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.calendarStep1Note')}
      </Paragraph>
      <ArticleImage src="/LageKompSteg2.png" alt={t('design.newComponent.calendarStep1Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.newComponent.calendarStep2Text1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.calendarStep2Text2')}
      </Paragraph>
      <ArticleImage src="/LageKompSteg3.png" alt={t('design.newComponent.calendarStep2Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.calendarStep3Text')}
      </Paragraph>
      <ArticleImage src="/LageKompSteg4.png" alt={t('design.newComponent.calendarStep3Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep4Title')}</Heading>
      <ArticleImage src="/LageKompSteg5.png" alt={t('design.newComponent.calendarStep4Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.newComponent.calendarStep5Text')}
      </Paragraph>
      <ArticleImage src="/LageKompSteg6.png" alt={t('design.newComponent.calendarStep5Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep6Title')}</Heading>
      <ArticleImage src="/LageKompSteg7.png" alt={t('design.newComponent.calendarStep6Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep7Title')}</Heading>
      <ArticleImage src="/LageKompSteg8.png" alt={t('design.newComponent.calendarStep7Title')} />

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.newComponent.calendarStep8Title')}</Heading>
      <ArticleImage src="/LageKompSteg9.png" alt={t('design.newComponent.calendarStep8Title')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.variantsTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.newComponent.variantsText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.newComponent.variantsFigma')}</List.Item>
        <List.Item>{t('design.newComponent.variantsStates')}</List.Item>
        <List.Item>{t('design.newComponent.variantsNew')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.accessibilityTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.newComponent.accessibilityText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.newComponent.accessibilityWCAG')}</List.Item>
        <List.Item>{t('design.newComponent.accessibilityTouch')}</List.Item>
        <List.Item>{t('design.newComponent.accessibilityFocus')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.responsiveTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.newComponent.responsiveText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.newComponent.responsiveTokens')}</List.Item>
        <List.Item>{t('design.newComponent.responsiveSizes')}</List.Item>
        <List.Item>{t('design.newComponent.responsiveBreak')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.newComponent.reuseTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('design.newComponent.reuseText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.newComponent.reuseExample1')}</List.Item>
        <List.Item>{t('design.newComponent.reuseExample2')}</List.Item>
        <List.Item>{t('design.newComponent.reuseExample3')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const PraktiskeEksemplerContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.examples.title')} category={t('design.sidebar.getStarted')}>
      <Heading level={2} data-size="md">{t('design.examples.example1Title')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.examples.example1Step1Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example1Step1Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example1Step2Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example1Step2Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973051?h=3ebb924832&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example1Step3Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example1Step3Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973063?h=c12d3bac52&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example1Step4Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example1Step4Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973085?h=3e90ad812a&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example1Step5Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example1Step5Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973099?h=a417e2a4c2&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
    </List.Ordered>

      <Heading level={3} data-size="sm">{t('design.examples.example1NoteTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.examples.example1NoteText')}
      </Paragraph>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-8)' }}>
      <iframe 
        title="vimeo-player" 
        src="https://player.vimeo.com/video/1108973121?h=f9c897493e&byline=0&portrait=0&title=0" 
        width="640" 
        height="360" 
        frameBorder="0" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        allowFullScreen 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>

      <Heading level={2} data-size="md">{t('design.examples.example2Title')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.examples.example2Step1Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step1Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973134?h=1a1181d76c&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step2Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step2Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973149?h=fda6753ccb&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step3Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step3Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973161?h=48162c787c&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step4Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step4Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973182?h=61d59181ae&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step5Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step5Text1')}
          </Paragraph>
          <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step5Text2')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973193?h=9ae87e1d69&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step6Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step6Text')}
          </Paragraph>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: 'var(--ds-size-4)' }}>
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1108973211?h=dd1010562a&byline=0&portrait=0&title=0" 
            width="640" 
            height="360" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </List.Item>
        <List.Item>{t('design.examples.example2Step7Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example2Step7Text')}
          </Paragraph>
        </List.Item>
      </List.Ordered>

      <Heading level={2} data-size="md">{t('design.examples.example3Title')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.examples.example3Step1Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step1Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step2Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step2Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step3Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step3Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step4Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step4Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step5Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step5Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step6Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step6Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step7Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step7Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step8Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step8Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step9Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step9Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step10Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step10Text')}
          </Paragraph>
        </List.Item>
        <List.Item>{t('design.examples.example3Step11Title')}
          <Paragraph style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-4)' }}>
            {t('design.examples.example3Step11Text')}
          </Paragraph>
        </List.Item>
      </List.Ordered>
    </ArticleLayout>
  );
};

const TokenStudioContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.tokenStudio.title')} category={t('design.sidebar.getStarted')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.tokenStudio.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.prerequisites')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.tokenStudio.prerequisitesIntro')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Figma</strong> - {t('design.tokenStudio.figmaAccount')}</List.Item>
        <List.Item><strong>Token Studio</strong> - {t('design.tokenStudio.tokenStudioAccount')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.generateToken')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.tokenStudio.goToGithub')}</List.Item>
        <List.Item>{t('design.tokenStudio.clickGenerate')}</List.Item>
        <List.Item>{t('design.tokenStudio.fillOut')}
          <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
            <List.Item><strong>{t('design.tokenStudio.tokenName')}</strong> {t('design.tokenStudio.tokenNameExample')}</List.Item>
            <List.Item><strong>{t('design.tokenStudio.expiration')}</strong> {t('design.tokenStudio.expirationText')}</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>{t('design.tokenStudio.generateAndCopy')}</List.Item>
      </List.Ordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.configureSync')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.tokenStudio.openPlugin')}</List.Item>
        <List.Item>{t('design.tokenStudio.goToSettings')}</List.Item>
        <List.Item>{t('design.tokenStudio.fillIn')}
          <List.Unordered style={{ marginTop: 'var(--ds-size-2)' }}>
            <List.Item><strong>{t('design.tokenStudio.syncName')}</strong> {t('design.tokenStudio.syncNameExample')}</List.Item>
            <List.Item><strong>{t('design.tokenStudio.personalToken')}</strong> {t('design.tokenStudio.personalTokenText')}</List.Item>
            <List.Item><strong>{t('design.tokenStudio.repository')}</strong> {t('design.tokenStudio.repositoryText')}</List.Item>
            <List.Item><strong>{t('design.tokenStudio.branch')}</strong> {t('design.tokenStudio.branchText')}</List.Item>
            <List.Item><strong>{t('design.tokenStudio.storageLocation')}</strong> {t('design.tokenStudio.storageLocationText')}</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>{t('design.tokenStudio.repoAccess')}</List.Item>
        <List.Item>{t('design.tokenStudio.repoPermissions')}</List.Item>
      </List.Ordered>
      <ArticleImage src="/TokenStudioSetup.png" alt="Konfigurer GitHub-sync" caption={t('design.tokenStudio.setupCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.performSync')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.tokenStudio.afterSave')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('design.tokenStudio.ifEmpty')}</List.Item>
        <List.Item>{t('design.tokenStudio.ifExists')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.tokenStudio.chooseAction')}
      </Paragraph>
      <ArticleImage src="/TokenStudioSync.png" alt="Utfør første synkronisering" caption={t('design.tokenStudio.syncCaption')} />

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.workflow')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Push</strong> {t('design.tokenStudio.pushText')}</List.Item>
        <List.Item><strong>Pull</strong> {t('design.tokenStudio.pullText')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.tokenStudio.tips')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.tokenStudio.tip1')}</List.Item>
        <List.Item>{t('design.tokenStudio.tip2')}</List.Item>
        <List.Item>{t('design.tokenStudio.tip3')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const FargeSystemContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.colorSystem.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorSystem.intro1')}
      </Paragraph>

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorSystem.intro2')}
      </Paragraph>

      <ArticleImage src="/ButtonColors.png" alt="Button Colors" caption={t('design.colorSystem.buttonCaption')} />

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.colorSystem.systemText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const TemabyggerContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.themeBuilder.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.themeBuilder.intro').replace('Designsystemets temagenerator', `<Link href="${t('design.themeBuilder.generatorLink')}" target="_blank" rel="noreferrer">Designsystemets temagenerator</Link>`)}
      </Paragraph>
      
      <ArticleImage src="/TemabyggerExample.png" alt="Temabygger" caption={t('design.themeBuilder.caption')} />

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.themeBuilder.systemText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.themeBuilder.examplesTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Text-default</strong> {t('design.themeBuilder.example1')}</List.Item>
        <List.Item><strong>Text-subtle</strong> {t('design.themeBuilder.example2')}</List.Item>
      </List.Unordered>
      
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.themeBuilder.appliesText')}
      </Paragraph>

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.themeBuilder.baseText').replace('Designsystemets temagenerator', `<Link href="${t('design.themeBuilder.generatorLink')}" target="_blank" rel="noreferrer">Designsystemets temagenerator</Link>`)}
      </Paragraph>
    </ArticleLayout>
  );
};

const BrukFargerContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.useColors.title')} category={t('design.sidebar.colors')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.useColors.intro')}
      </Paragraph>
    </ArticleLayout>
  );
};

const ForeslaDesignContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('design.proposeDesign.title')} category={t('design.sidebar.contribute')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('design.proposeDesign.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.proposeDesign.newComponent')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.proposeDesign.newComponentText1').replace('Github', `<Link href="${t('design.proposeDesign.githubLink')}" target="_blank" rel="noreferrer">Github</Link>`)}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.proposeDesign.newComponentText2')}
      </Paragraph>

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.proposeDesign.newComponentText3')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('design.proposeDesign.consider1')}</List.Item>
        <List.Item>{t('design.proposeDesign.consider2')}</List.Item>
        <List.Item>{t('design.proposeDesign.consider3')}</List.Item>
        <List.Item>{t('design.proposeDesign.consider4')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.proposeDesign.reportTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('design.proposeDesign.reportText').replace('Github', `<Link href="${t('design.proposeDesign.githubIssuesLink')}" target="_blank" rel="noreferrer">Github</Link>`)}
      </Paragraph>
    </ArticleLayout>
  );
};

// --- MAIN EXPORT ---

type MenuItem = {
  label: string;
  id?: string;
  link?: string;
  children?: MenuItem[];
};

interface DesignPageProps {
  section?: string;
}

export const DesignPage = ({ section }: DesignPageProps) => {
  const { t } = useLanguage();
  const [activeDesignPage, setActiveDesignPage] = useState(section || 'intro');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Update active page if section prop changes
  if (section && section !== activeDesignPage) {
     setActiveDesignPage(section);
  }

  // Menu Data Structure
  const menuItems: { title: string; items: MenuItem[] }[] = [
    {
      title: t('design.sidebar.forDesigners'),
      items: [
        {
          label: t('design.sidebar.getStarted'),
          children: [
            { label: t('design.sidebar.figmaConnect'), id: 'figma-oppkobling' },
            { label: t('design.sidebar.startup'), id: 'oppstart' },
            { label: t('design.sidebar.newComponent'), id: 'lage-komponenter' },
            { label: t('design.sidebar.examples'), id: 'praktiske-eksempler' },
            { label: t('design.sidebar.tokenStudio'), id: 'token-studio' },
          ]
        },
        {
          label: t('design.sidebar.colors'),
          children: [
            { label: t('design.sidebar.colorSystem'), id: 'fargesystem' },
            { label: t('design.sidebar.themeBuilder'), id: 'temabygger' },
            { label: t('design.sidebar.useColors'), id: 'bruk-farger' },
          ]
        },
        {
          label: t('design.sidebar.contribute'),
          children: [
            { label: t('design.sidebar.proposeDesign'), id: 'foresla-design' },
          ]
        }
      ]
    },
    {
      title: t('design.sidebar.designElements'),
      items: [
        {
          label: t('design.sidebar.designTokens'),
          children: [
            { label: t('design.sidebar.whatAreTokens'), id: 'hva-er-design-tokens' },
            { label: t('design.sidebar.tokensInFigma'), id: 'design-tokens-i-figma' },
          ]
        },
        {
          label: t('design.sidebar.colors'),
          children: [
            { label: t('design.sidebar.colorStructure'), id: 'farger-navnestruktur' },
            { label: t('design.sidebar.colorOverview'), id: 'farger-oversikt' },
            { label: t('design.sidebar.colorTokens'), id: 'farge-tokens' },
          ]
        },
        {
          label: t('design.sidebar.shadows'),
          children: [
            { label: t('design.sidebar.shadowUsage'), id: 'skygger-bruk' },
            { label: t('design.sidebar.shadowTokens'), id: 'skygge-tokens' },
          ]
        },
        {
          label: t('design.sidebar.sizes'),
          children: [
            { label: t('design.sidebar.componentSizes'), id: 'komponent-storrelser' },
            { label: t('design.sidebar.sizeTokens'), id: 'storrelse-tokens' },
          ]
        },
        {
          label: t('design.sidebar.typography'),
          children: [
            { label: t('design.sidebar.fontFamily'), id: 'font-family' },
            { label: t('design.sidebar.typoTokens'), id: 'typografi-tokens' },
          ]
        }
      ]
    }
  ];

  const DefaultDesignContent = () => (
    <ArticleLayout title={t('design.intro.title')} intro={t('design.intro.welcome')} category="Intro">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ds-size-6)' }}>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">{t('design.intro.getStarted')}</Heading>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActiveDesignPage('figma-oppkobling')}}>{t('design.intro.goToGuide')}</Link>
          </CardBlock>
        </Card>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">{t('design.intro.colors')}</Heading>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActiveDesignPage('fargesystem')}}>{t('design.intro.seeColors')}</Link>
          </CardBlock>
        </Card>
      </div>
    </ArticleLayout>
  );

  return (
    <main className={`container ${styles.docLayout}`}>
      
      {/* --- CUSTOM SIDEBAR --- */}
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {menuItems.map((group, index) => (
            <div key={index} className={styles.group}>
               <div className={styles.groupTitle}>{group.title}</div>
               <ul className={styles.list}>
                 {group.items.map((item, itemIndex) => (
                   <li key={itemIndex} className={styles.listItem}>
                     {item.children ? (
                       // Has children - Sub-menu
                       <details 
                         open={openSections[`${index}-${itemIndex}`] || false} 
                         className={styles.details}
                       >
                         <summary 
                           className={`${styles.link} ${activeDesignPage === item.id ? styles.linkActive : ''}`}
                           onClick={(e) => {
                             e.preventDefault();
                             const key = `${index}-${itemIndex}`;
                             setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
                           }}
                         >
                           {item.label}
                         </summary>
                         <ul className={styles.nestedList}>
                           {item.children.map((subItem, subIndex) => (
                             <li key={subIndex}>
                               <button 
                                 type="button"
                                 className={`${styles.link} ${styles.nestedLink} ${activeDesignPage === subItem.id ? styles.nestedLinkActive : ''}`}
                                 onClick={() => {
                                   if (subItem.id) {
                                     setActiveDesignPage(subItem.id);
                                     // setOpenSections({}); // Keep menus open
                                   }
                                 }}
                               >
                                 {subItem.label}
                               </button>
                             </li>
                           ))}
                         </ul>
                       </details>
                     ) : (
                       // Single link
                       <button 
                         type="button"
                         className={`${styles.link} ${activeDesignPage === item.id ? styles.linkActive : ''}`}
                         onClick={() => {
                            if (item.id) setActiveDesignPage(item.id);
                         }}
                       >
                         {item.label}
                       </button>
                     )}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className={styles.docContent}>
        {activeDesignPage === 'intro' ? <DefaultDesignContent /> :
         activeDesignPage === 'figma-oppkobling' ? <FigmaOppkoblingContent /> :
         activeDesignPage === 'oppstart' ? <OppstartContent /> :
         activeDesignPage === 'lage-komponenter' ? <LageKomponenterContent /> :
         activeDesignPage === 'praktiske-eksempler' ? <PraktiskeEksemplerContent /> :
         activeDesignPage === 'token-studio' ? <TokenStudioContent /> :
         activeDesignPage === 'fargesystem' ? <FargeSystemContent /> :
         activeDesignPage === 'temabygger' ? <TemabyggerContent /> :
         activeDesignPage === 'bruk-farger' ? <BrukFargerContent /> :
         activeDesignPage === 'foresla-design' ? <ForeslaDesignContent /> :
         activeDesignPage === 'hva-er-design-tokens' ? <HvaErDesignTokensContent /> :
         activeDesignPage === 'design-tokens-i-figma' ? <DesignTokensIFigmaContent /> :
         activeDesignPage === 'farger-navnestruktur' ? <FargerNavnestrukturContent /> :
         activeDesignPage === 'farger-oversikt' ? <FargerOversiktContent /> :
         activeDesignPage === 'farge-tokens' ? <FargeTokensContent /> :
         activeDesignPage === 'skygger-bruk' ? <SkyggerBrukContent /> :
         activeDesignPage === 'skygge-tokens' ? <SkyggeTokensContent /> :
         activeDesignPage === 'komponent-storrelser' ? <KomponentStorrelserContent /> :
         activeDesignPage === 'storrelse-tokens' ? <StorrelseTokensContent /> :
         activeDesignPage === 'font-family' ? <FontFamilyContent /> :
         activeDesignPage === 'typografi-tokens' ? <TypografiTokensContent /> :
         <DefaultDesignContent />
        }
      </div>
    </main>
  );
};
