const LineUpTableDia1 = () => {
  return (
    <>
      <section>
        <h4 className="table-title">Keynotes</h4>
        <div className="keynotes-flex">
          <div className="keynote">
            <span>14:00</span>
            <p>INTRO</p>
          </div>
          <div className="keynote">
            <span>14:15</span>
            <p>COMMERCE</p>
          </div>
          <div className="keynote">
            <span>14:30</span>
            <p>FINTECH</p>
          </div>
          <div className="keynote">
            <span>14:45</span>
            <p>TECHNOLOGY</p>
          </div>
        </div>
        <div className="break">
          <span>15:00</span>
          <p>BREAK</p>
        </div>
      </section>
      <table className="talks-table">
        <thead>
          <tr className="header">
            <th>
              <h4>Talks</h4>
            </th>
            <th>
              <span>Stage A</span>
            </th>
            <th>
              <span>Stage B</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw600">15:20</td>
            <td>Strikethrough star distribute device library.</td>
            <td>Union select bold plugin slice component pen.</td>
          </tr>
          <tr>
            <td className="fw600">15:35</td>
            <td>Background horizontal bold shadow asset auto flows.</td>
            <td>Mask link reesizing scale vector invite scale.</td>
          </tr>
          <tr>
            <td className="fw600">15:50</td>
            <td>Thumbnail object mask reesizing main connection.</td>
            <td>Thumbnail blur component mask hand edit rectangle.</td>
          </tr>
          <tr>
            <td className="fw600">16:05</td>
            <td>Comment pixel effect overflow slice.</td>
            <td>Scale thumbnail reesizing layout mask content device.</td>
          </tr>
          <tr>
            <td className="fw600">16:20</td>
            <td>Font figma underline text line.</td>
            <td>Background group object library draft ellipse line variant.</td>
          </tr>
          <tr>
            <td className="fw600">16:35</td>
            <td>Pen font selection scrolling create vector.</td>
            <td>Union undo line library ellipse horizontal main ellipse.</td>
          </tr>
        </tbody>
      </table>
      <div className="break">
        <span>16:50</span>
        <p>BREAK</p>
      </div>
      <table className="talks-table">
        <thead>
          <tr className="header">
            <th>
              <h4>Talks</h4>
            </th>
            <th>
              <div className="stage-flex">
                <div className="stage-flex">
                  <span>Stage A</span>
                  <div className="vline"></div>
                  <div className="categoria-table">
                    <p>Commerce</p>
                    <div
                      className="punto"
                      style={{ background: "#FBDC3C" }}
                    ></div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div className="stage-flex">
                <span>Stage B</span>
                <div className="vline"></div>
                <div className="categoria-table">
                  <p>Fintech</p>
                  <div
                    className="punto"
                    style={{ background: "#1DBFF3" }}
                  ></div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw600">17:10</td>
            <td>Strikethrough star distribute device library.</td>
            <td>Union select bold plugin slice component pen.</td>
          </tr>
          <tr>
            <td className="fw600">17:25</td>
            <td>Background horizontal bold shadow asset auto flows.</td>
            <td>Mask link reesizing scale vector invite scale.</td>
          </tr>
          <tr>
            <td className="fw600">17:40</td>
            <td>Thumbnail object mask reesizing main connection.</td>
            <td>Thumbnail blur component mask hand edit rectangle.</td>
          </tr>
          <tr>
            <td className="fw600">17:55</td>
            <td>Comment pixel effect overflow slice.</td>
            <td>Scale thumbnail reesizing layout mask content device.</td>
          </tr>
          <tr>
            <td className="fw600">18:10</td>
            <td>Font figma underline text line.</td>
            <td>Background group object library draft ellipse line variant.</td>
          </tr>
        </tbody>
      </table>
      <div className="break">
        <span>18:25</span>
        <p>Cierre</p>
      </div>
    </>
  );
};

export default LineUpTableDia1;
