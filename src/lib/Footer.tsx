import {
  CodeBracketIcon,
  DocumentCheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"

import { RecurseLogo } from "./RecurseLogo"
import { RecurseRing } from "./RecurseRing"
import { Social } from "./Social"
import { XXIIVVLogo } from "./XXIIVVLogo"
import { XXIIVVRing } from "./XXIIVVRing"

export interface FooterProps {
  startYear?: number
  sourceRepo?: string
  editUrl?: string
  showRecurseCenter?: boolean
  showPrivacyPolicy?: boolean
  showSocial?: boolean
  showRecurseRing?: boolean
  showXXIIVVRing?: boolean
}

export const Footer = ({
  startYear,
  sourceRepo,
  editUrl,
  showRecurseCenter = true,
  showPrivacyPolicy = true,
  showSocial = true,
  showRecurseRing = true,
  showXXIIVVRing = true,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const hasIconNav =
    editUrl || showRecurseCenter || sourceRepo || showPrivacyPolicy
  const hasSocialSection = showSocial || showRecurseRing || showXXIIVVRing

  return (
    <footer className="mx-auto max-w-5xl pt-[14vh] pb-[8vh]">
      <div className="divider" />
      <div className="footer sm:footer-horizontal items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>
            &copy;{" "}
            {startYear ? `${startYear} - ${currentYear}` : currentYear} Nat
            Welch. All rights reserved.
          </p>
        </aside>
        {hasIconNav && (
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {editUrl && (
              <Link href={editUrl} title="Edit this page">
                <PencilIcon className="inline-block h-4 w-4" />
              </Link>
            )}
            {showRecurseCenter && (
              <Link
                href="https://www.recurse.com/scout/click?t=1a20cf01214e4c5923ab6ebd6c0f8f18"
                title="Want to become a better programmer? Join the Recurse Center!"
              >
                <RecurseLogo className="inline-block h-4 w-4" />
              </Link>
            )}
            {sourceRepo && (
              <Link
                className="blue ms-2"
                href={sourceRepo}
                title="Source Code"
              >
                <CodeBracketIcon className="inline-block h-4 w-4" />
              </Link>
            )}
            {showPrivacyPolicy && (
              <Link
                className="blue ms-2"
                href="https://natwelch.com/privacy"
                title="Privacy Policy"
              >
                <DocumentCheckIcon className="inline-block h-4 w-4" />
              </Link>
            )}
          </nav>
        )}
      </div>

      {hasSocialSection && (
        <div className="footer sm:footer-horizontal text-base-content p-4">
          {showSocial && (
            <nav className="gap-4">
              <h6 className="footer-title">Social</h6>
              <Social
                includeWebring={false}
                size={24}
                className="flex flex-wrap items-center -mx-2"
              />
            </nav>
          )}
          {showRecurseRing && (
            <nav className="gap-4 md:justify-self-end">
              <h6 className="footer-title">
                <Link
                  href="https://ring.recurse.com/"
                  className="hover:underline"
                >
                  <RecurseLogo
                    className="inline-block h-4 w-4 align-text-bottom"
                    size={12}
                  />{" "}
                  Webring
                </Link>
              </h6>
              <RecurseRing />
            </nav>
          )}
          {showXXIIVVRing && (
            <nav className="gap-4 md:justify-self-end">
              <h6 className="footer-title">
                <Link
                  href="https://webring.xxiivv.com/"
                  className="hover:underline"
                >
                  <XXIIVVLogo
                    className="inline-block h-4 w-4 align-text-bottom"
                    size={12}
                  />{" "}
                  Webring
                </Link>
              </h6>
              <XXIIVVRing />
            </nav>
          )}
        </div>
      )}
    </footer>
  )
}
