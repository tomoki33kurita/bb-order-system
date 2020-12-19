import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, RadioGroup, Radio } from '@material-ui/core'
import AccordionRadio from 'src/components/AccordionRadio'

const Designation: React.FC = () => {
  return (
    <Box mx={1} p={5} border={'solid 1px green'}>
      <AccordionRadio
        summary={'基本モデルを選択'}
        defaultValue={'m8'}
        objects={[
          { label: 'M8型', value: 'm8' },
          { label: 'M1型', value: 'm1' },
          { label: 'M2型', value: 'm2' },
          { label: 'M01型', value: 'm01' },
        ]}
      />
      <AccordionRadio
        summary={'利き腕を選択'}
        defaultValue={'rightThrow'}
        objects={[
          { label: '右投げ', value: 'rightThrow' },
          { label: '左投げ', value: 'leftThrow' },
        ]}
      />
      <AccordionRadio
        summary={'ミットの大きさ'}
        defaultValue={'default'}
        objects={[
          { label: '基本モデルより10mm大きく', value: 'large_5' },
          { label: '基本モデルより5mm大きく', value: 'large_5' },
          { label: '基本モデルズバリ', value: 'default' },
          { label: '基本モデルより5mm小さく', value: 'small_5' },
          { label: '基本モデルより10mm小さく', value: 'small_10' },
        ]}
      />
      <AccordionRadio
        summary={'ポケットの深さ'}
        defaultValue={'default'}
        objects={[
          { label: '基本モデルズバリ', value: 'default' },
          { label: '基本モデルより深く', value: 'deep' },
          { label: '基本モデルより浅く', value: 'shallow' },
        ]}
      />
      <AccordionRadio
        summary={'バックスタイル'}
        defaultValue={'A_back'}
        objects={[
          { label: 'Aバック', value: 'A_back' },
          { label: 'Bバック', value: 'B_back' },
          { label: 'axバック', value: 'ax_back' },
          { label: 'smバック', value: 'sm_back' },
        ]}
      />
      <AccordionRadio
        summary={'バッドスタイル'}
        defaultValue={'A_pad'}
        objects={[
          { label: 'Aバッド', value: 'A_pad' },
          { label: 'Bバッド', value: 'B_pad' },
        ]}
      />
      <Accordion style={{ marginBottom: '8px' }}>
        <AccordionSummary>レザーカラー</AccordionSummary>
      </Accordion>
      <AccordionRadio
        summary={'革の硬さ'}
        defaultValue={'normal'}
        objects={[
          { label: '硬く', value: 'hard' },
          { label: '普通', value: 'normal' },
          { label: '柔らかく', value: 'soft' },
        ]}
      />
      <AccordionRadio
        summary={'芯の硬さ'}
        defaultValue={'normal'}
        objects={[
          { label: '硬く', value: 'hard' },
          { label: '普通', value: 'normal' },
          { label: '柔らかく', value: 'soft' },
        ]}
      />
      <AccordionRadio
        summary={'革の厚さ'}
        defaultValue={'normal'}
        objects={[
          { label: '厚く', value: 'thick' },
          { label: '普通', value: 'normal' },
          { label: '薄く', value: 'thin' },
        ]}
      />
      <AccordionRadio
        summary={'裏革の種類'}
        defaultValue={''}
        objects={[
          { label: '共牛革', value: 'cow' },
          { label: '和牛革(ブラックのみ)', value: 'wagyu' },
          { label: '鹿革', value: 'deer' },
          { label: 'ウルトラスエード(ブラックのみ)', value: 'ultra_suede' },
        ]}
      />
      <AccordionRadio
        summary={'ハミダシ'}
        defaultValue={''}
        objects={[
          { label: '切りハミ(ホワイト)', value: 'kirihami_white' },
          { label: '切りハミ(ホワイト)', value: 'kirihami_black' },
          { label: 'ハミダシなし', value: 'no_hamidashi' },
        ]}
      />
      <AccordionRadio
        summary={'指カバー'}
        defaultValue={''}
        objects={[
          { label: 'スタンダード', value: 'standard_finger_guard' },
          { label: 'ロング', value: 'long_finger_guard' },
          { label: '指カバーなし', value: 'no_finger_guard' },
        ]}
      />
      <AccordionRadio
        summary={'座ブトンスポンジ'}
        defaultValue={''}
        objects={[
          { label: '座ブトンスポンジ有り', value: 'zabuton' },
          { label: '無し', value: 'no_zabuton' },
        ]}
      />
      <AccordionRadio
        summary={'EX機能'}
        defaultValue={''}
        objects={[
          { label: 'EX機能有り', value: 'ex_func' },
          { label: '無し', value: 'no_ex_func' },
        ]}
      />
      <AccordionRadio
        summary={'ピンキーパターン'}
        defaultValue={''}
        objects={[
          { label: 'ピンキーパターン有り', value: 'pinkie_pattern' },
          { label: '無し', value: 'no_pinkie_pattern' },
        ]}
      />
      <AccordionRadio
        summary={'革紐'}
        defaultValue={''}
        objects={[
          { label: 'エコロジーブラウン', value: 'pinkie_pattern' },
          { label: 'Jブルー', value: 'no_pinkie_pattern' },
        ]}
      />
      <AccordionRadio
        summary={'ラベル'}
        defaultValue={''}
        objects={[
          { label: '直刺繍C1', value: 'straight_embroidery' },
          { label: '刺繍ワッペンW1', value: 'emblem_1' },
          { label: '刺繍ワッペンW2', value: 'emblem_2' },
          { label: '刺繍ワッペンW3', value: 'emblem_3' },
          { label: '刺繍ワッペンW4', value: 'emblem_4' },
          { label: 'シリコンS1', value: 'silicon_1' },
          { label: 'シリコンS2', value: 'silicon_2' },
          { label: 'シリコンS3', value: 'silicon_3' },
          { label: 'シリコンS4', value: 'silicon_4' },
          { label: 'シリコンS5', value: 'silicon_5' },
          { label: 'シリコンS6', value: 'silicon_6' },
        ]}
      />
      {/* キャビティライン加工の項目作る */}
      <AccordionRadio
        summary={'TB刻印'}
        defaultValue={''}
        objects={[
          { label: 'TB刻印あり', value: 'tb_engraved' },
          { label: 'なし', value: 'no_tb_engraved' },
        ]}
      />
      <AccordionRadio
        summary={'手首裏部の素材'}
        defaultValue={''}
        objects={[
          { label: 'ムートン(ホワイト)', value: 'mouton_white' },
          { label: 'ムートン(ブラック)', value: 'mouton_black' },
          { label: 'ウルトラスエード(パッド)', value: 'ultra_suède' },
        ]}
      />
      <AccordionRadio
        summary={'ステッチカラー'}
        defaultValue={''}
        objects={[
          { label: 'ブラック', value: 'black' },
          { label: 'ピンク', value: 'pink' },
          { label: 'ブルー', value: 'blue' },
        ]}
      />
      <Accordion>
        <AccordionSummary>刺繍</AccordionSummary>
        <AccordionDetails>
          <AccordionRadio
            summary={'書体'}
            defaultValue={''}
            objects={[
              { label: '楷書体', value: 'regular' },
              { label: '行書体', value: 'semi_cursive' },
              { label: 'アルファベット活字体', value: 'alphabet_regular' },
              { label: 'アルファベット筆記体', value: 'alphabet_cursive' },
              { label: 'ハタケヤマオリジナル書体', value: 'original' },
              { label: 'オールドイングリッシュ書体', value: 'old_english' },
              { label: '刻印', value: 'engraved' },
            ]}
          />
          <AccordionRadio
            summary={'位置'}
            defaultValue={''}
            objects={[
              { label: '親指部分', value: 'thumb_finger' },
              { label: '小指部分', value: 'child_finger' },
              { label: '甲部分(シェラームーブのみ)', value: 'shell' },
              { label: '裏革部分(窓見部分)', value: 'leather_lining_mdd' },
              { label: '裏革部分(手口部分)', value: 'leather_lining_enter' },
              { label: 'グラブ袋', value: 'glove_bag' },
            ]}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default Designation
