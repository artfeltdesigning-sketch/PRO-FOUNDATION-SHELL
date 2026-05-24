"use client";

type Props = {
  output: string;
  collapsed: boolean;
  setCollapsed: (
    value: boolean
  ) => void;
};

export default function ResultPanel({
  output,
  collapsed,
  setCollapsed
}: Props) {
  return (
    <aside
      className={`glass output-shell ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div
        className="edge-toggle edge-right"
        onClick={() =>
          setCollapsed(
            !collapsed
          )
        }
      />

      {!collapsed && (
        <>
          <div className="output-top">
            <div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing:
                    "-0.04em"
                }}
              >
                Prompt Output
                Console
              </div>

              <div
                className="muted"
                style={{
                  marginTop: 10
                }}
              >
                Premium
                production-ready
                AI prompt output
              </div>
            </div>
          </div>

          <div
            className="output-content"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.04)"
            }}
          >
            {output ||
              "Generated premium AI output will appear here after generation."}
          </div>
        </>
      )}
    </aside>
  );
}
