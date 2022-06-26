import * as React from "react"
import './program.css'

const Program = () => {
    return(
        <div>
            <h1 className="sec">第１セッション 13:30~14:30</h1>
            <table border="1" className="pro">
            <thead bgcolor='gray'>
            <tr>
                <td className="no">No.</td>
                <td className="name">氏名（研究室名）</td>
                <td className="title">タイトル</td>
            </tr>
            </thead>
            <tbody>
                {/* 立命館 */}
            <tr>
                <td></td>
                <td>大村　凛<br/><span>(立命館大学　西浦研究室)</span></td>
                <td>ネックスピーカを用いたマルチチャネルアクティブノイズコントロールによる工場騒音の低減</td>
            </tr>
            <tr>
                <td></td>
                <td>中西　清貴<br/><span>(立命館大学　西浦研究室)</span></td>
                <td>Speech Extraction Using Row-Wise Inter-Frame Correlation<br className='sep'/> of Video Recorded by Rolling-Shutter Camera</td>
            </tr>
            <tr>
                <td></td>
                <td>廣瀬　彩乃<br/><span>(立命館大学　西浦研究室)</span></td>
                <td>Improvement of distance presentation for virtual sound source based on hybrid control of electro-dynamic and parametric loudspeaker arrays</td>
            </tr>
            <tr>
                <td></td>
                <td>古谷　康佑<br/><span>(立命館大学　西浦研究室)</span></td>
                <td>Improvement of Lateral Sound Image Localization in Transaural Systems<br className='sep'/> with Parametric Array Loudspeakers</td>
            </tr>
            <tr>
                <td></td>
                <td>奥本 佑哉<br/><span>(和歌山大学 西村研究室)</span></td>
                <td>学習済みx-vectorモデルを用いた若年話者判別法の検討</td>
            </tr>
            <tr>
                <td></td>
                <td>柴田 夏生<br/><span>(龍谷大学　片岡研究室)</span></td>
                <td>pix2pix GANによるhoth雑音の抑圧に関する検討</td>
            </tr>
            <tr>
                <td></td>
                <td>久保 祐喜<br/><span>(大阪大学 駒谷研究室)</span></td>
                <td>システム発話の対話行為に基づくマルチモーダル心象推定の改善の検討</td>
            </tr>
            <tr>
                <td></td>
                <td>上田 明日斗<br/><span>(大阪産業大学 中山研究室)</span></td>
                <td>超音波空中ハプティクスにおける振幅変調の包絡周波数と質感の対応に関する主観評価</td>
            </tr>
            <tr>
                <td></td>
                <td>安川浩貴<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>話者情報に条件づけられた対話モデルにおける話者情報を抽出する方法の比較分析</td>
            </tr>
            <tr>
                <td></td>
                <td>佃 夏野<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>ユーザから情報を引き出すための強化学習による応答生成</td>
            </tr>
            <tr>
                <td></td>
                <td>曹 博禹<br/><span>(立命館大学 山下研究室)</span></td>
                <td>コード入力に基づく多楽器音楽合成システムの構築</td>
            </tr>
            <tr>
                <td></td>
                <td>石田 涼<br/><span>(大阪工業大学 鈴木研究室)</span></td>
                <td>音声認識率を報酬とした深層強化学習による特徴量変換法</td>
            </tr>
            <tr>
                <td></td>
                <td>鎌倉 大地<br/><span>(京都大学 河原研究室)</span></td>
                <td>周期性を考慮したマルチタスク学習に基づく自動ドラム採譜と拍節構造推定</td>
            </tr>
            <tr>
                <td></td>
                <td>川井 悠生<br/><span>(京都大学 河原研究室)</span></td>
                <td>複数の半自律アバターを用いた同時並列就職面接システム</td>
            </tr>
            <tr>
                <td></td>
                <td>清水 聡太<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>データ拡張を用いた基本周波数制御可能なHiFi-GAN</td>
            </tr>
            <tr>
                <td></td>
                <td>林 苡含<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>Attribute Prototype Networkを用いた音響イベントのゼロショット学習</td>
            </tr>
            </tbody>
        </table>

        <h1 className="sec">第２セッション 14:40~15:40</h1>
        <table border="1" className="pro">
            <thead bgcolor='gray'>
            <tr>
                <td className="no">No.</td>
                <td className="name">氏名（研究室名）</td>
                <td className="title">タイトル</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td>山名 莉央<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>深さ重みを考慮したDeep Priorによる脳磁図電流源推定</td>
            </tr>
            <tr>
                <td></td>
                <td>吉本 拓真<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>筋萎縮性側索硬化症者の音声合成を目的としたモデル適応と声質変換の比較評価</td>
            </tr>

            <tr>
                <td></td>
                <td>藤岡 璃乃<br/><span>(龍谷大学 片岡研究室)</span></td>
                <td>２次元スピーカアレイによる床方向への放射を考慮した音場制御</td>
            </tr>
            <tr>
                <td></td>
                <td>佐賀 健志<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>マルチモーダル特徴量によるソーシャルスキルスコア推定</td>
            </tr>
            <tr>
                <td></td>
                <td>吉田 快<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>ペルソナ対話システムにおけるペルソナの更新の導入とその分析</td>
            </tr>
            <tr>
                <td></td>
                <td>福田 りょう<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>音声機械翻訳のための音声翻訳コーパスに基づく発話分割</td>
            </tr>
            <tr>
                <td></td>
                <td>金澤 尚希<br/><span>(大阪工業大学 鈴木研究室)</span></td>
                <td>音声合成用モデルを用いた唇動画像からの音声生成法における話者依存性の分析</td>
            </tr>
            <tr>
                <td></td>
                <td>少路 春希<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>Evaluation of the Low-Cost Numerical Variance Suppression Method<br className='sep'/> for Outdoor Far Field in Wave Acoustic Simulations </td>
            </tr>
            <tr>
                <td></td>
                <td>中村 晃希<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>Evaluation for improvement of noise reduction performance by PID filter<br className='sep'/> in active noise control with optical laser microphone</td>
            </tr>
            <tr>
                <td></td>
                <td>原田 優菜<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>A study on initial reverberation control on surround sound system<br className='sep'/> using parametric and electro-dynamic loudspeakers</td>
            </tr>

            <tr>
                <td></td>
                <td>吉原 大智<br/><span>(奈良先端科学技術大学院大学 吉野研究室)</span></td>
                <td>観測・記憶から状況に応じた説明を生成する自律移動型ロボット</td>
            </tr>
            <tr>
                <td></td>
                <td>林 銀次<br/><span>(同志社大学 片桐・大崎研究室)</span></td>
                <td>成人音声と子供音声における線スペクトル対を用いた分布の差異の検討</td>
            </tr>
            <tr>
                <td></td>
                <td>須村 允亮<br/><span>(京都大学 河原研究室)</span></td>
                <td>室内環境理解のための分散型カメラ付きマイクアレイの定位と同期</td>
            </tr>
            <tr>
                <td></td>
                <td>Deng Tengyu<br/><span>(京都大学 河原研究室)</span></td>
                <td>歌声における歌詞認識と音高推定の同時学習</td>
            </tr>
            <tr>
                <td></td>
                <td>Soky Kak<br/><span>(京都大学 河原研究室)</span></td>
                <td>Leveraging Simultaneous Translation for Enhancing Transcription of<br className='sep'/> Low-resource Language via Cross Attention Mechanism</td>
            </tr>
            <tr>
                <td></td>
                <td>下西 莞太<br/><span>(立命館大学 山下研究室)</span></td>
                <td>リハーサル法を用いた継続学習による環境音分離</td>
            </tr>
            </tbody>
        </table>

        <h1 className="sec">第３セッション 15:50~16:50</h1>
        <table border="1" className="pro">
            <thead bgcolor='gray'>
            <tr>
                <td className="no">No.</td>
                <td className="name">氏名（研究室名）</td>
                <td className="title">タイトル</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td>日田 光紀<br/><span>(和歌山大学 西村研究室)</span></td>
                <td>HiFi-GANを用いた音声認識コーパスの帯域拡張</td>
            </tr>

            <tr>
                <td></td>
                <td>林 拓哉<br/><span>(大阪産業大学 中山研究室)</span></td>
                <td>歯科治療音快音化のためのダイアトニックコードを用いたコード進行自動生成法の検討</td>
            </tr>
            <tr>
                <td></td>
                <td>松坂 勇樹<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>wav2vec 2.0によるラベル無し音声を用いた脳性麻痺患者の音声認識</td>
            </tr>
            <tr>
                <td></td>
                <td>山下 陽生<br/><span>(神戸大学 滝口研究室)</span></td>
                <td>Multi-Stream HiFi-GANとiSTFTNetの精度および合成速度の比較</td>
            </tr>
            <tr>
                <td></td>
                <td>山本 賢太<br/><span>(京都大学 河原研究室)</span></td>
                <td>音声対話システムにおけるユーザ適応のためのキャラクタ表現</td>
            </tr>

            <tr>
                <td></td>
                <td>Shi Hao<br/><span>(京都大学 河原研究室)</span></td>
                <td>Monaural Speech Enhancement Based on Spectrogram Decomposition<br className='sep'/> for Convolutional Neural Network-sensitive Feature Extraction</td>
            </tr>
            <tr>
                <td></td>
                <td>Fu Yahui<br/><span>(京都大学 河原研究室)</span></td>
                <td>Dual Variational Generative Model and Retrieval Calibration<br className='sep'/> for Empathetic Response Generation</td>
            </tr>


            <tr>
                <td></td>
                <td>Juntao Zhu<br/><span>(同志社大学 加藤・田村研究室)</span></td>
                <td>Allocentric or egocentric controlled response generation<br className='sep'/> in attention-based neural conversational model</td>
            </tr>            
            <tr>
                <td></td>
                <td>袖谷 紳太郎<br/><span>(大阪工業大学 鈴木研究室)</span></td>
                <td>文ベクトル系列の予測モデルを用いた雑談対話における適切な応答文選択法</td>
            </tr>
            <tr>
                <td></td>
                <td>八木 崇<br/><span>(大阪工業大学 鈴木研究室)</span></td>
                <td>音声合成器の中間表現を利用した発話内容に依存しない感情識別用特徴量の抽出</td>
            </tr>
            <tr>
                <td></td>
                <td>胡 尤佳<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>音声認識出力の曖昧性に頑健な音声翻訳のための音声認識の精度ごとの性能比較</td>
            </tr>
            <tr>
                <td></td>
                <td>奥田 由佳<br/><span>(奈良先端科学技術大学院大学 中村研究室)</span></td>
                <td>階層化されたアイテム情報とユーザ発話の埋め込みに基づく推薦システム</td>
            </tr>
            <tr>
                <td></td>
                <td>芳澤 翼<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>Investigation on Effect of Active Pixel Ranges and Pyramid Levels<br className='sep'/> on Speech Extraction from Video Captured by Rolling-Shutter Camera</td>
            </tr>
            <tr>
                <td></td>
                <td>李 步冉<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>5.1 ch.サラウンドから22.2 ch.サラウンドへの深層学習を用いたアップミックス手法の検討</td>
            </tr>
            <tr>
                <td></td>
                <td>陳 鵬<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>単一マイクロホンを用いた重み付き時間-周波数マスクに基づく目的音声の抽出</td>
            </tr>
            <tr>
                <td></td>
                <td>三浦 峻平<br/><span>(立命館大学 西浦研究室)</span></td>
                <td>Distance Control of Sound Image based on Mode Matching<br/>in 22.2 Multichannel System</td>
            </tr>


            </tbody>
        </table>
        </div>
        
    )
}

export default Program;