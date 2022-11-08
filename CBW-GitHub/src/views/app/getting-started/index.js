import React, { Component, Fragment } from "react";
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

const GettingStarted = (props) => {
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.getting-started" match={props.match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Card>
                <CardBody>
                    <p class="p1">We wanted to give you an official greeting and welcome to our New Cash Crowdfund Community!</p>
                    <p class="p1">In this section you will learn a little bit of how this works, who we are and most important, how to proceed with us online!</p>
                    <p class="p1">We are a crowdfunding portal, that is all. No MLM, no products, no binary, no trading, no coins, no affiliate marketing or anything of the like. This is COMPLETELY VOLUNTARY and everyone that is here is here by choice!</p>
                    <p class="p1">Requirements to join our Cash Crowdfund Portal: 2 envelopes, 2 stamps, 2 pieces of paper and $37.00 in&nbsp;<em>CASH</em>.&nbsp;</p>
                    <p class="p1"><em>(We suggest to get these things in order BEFORE you request your Sponsor to assign you a campaign.)</em></p>
                    <p class="p1">Now that we got past what we are, to participate with us you have to make a donation to someones crowdfund to have full access to your own crowdfunding options. Our first level crowdfunding donation is&nbsp;<em>$25</em>.</p>
                    <p class="p1">You will also need to activate your online account by sending a&nbsp;<em>ONE TIME</em>&nbsp;donation to Administration of<em>&nbsp;$12</em>. For this you have full access to your back office area, updates, crowdfund tracking, team tracking, invite pages and full Administration Support for the life of Cash Crowdfund.</p>
                    <p class="p1">A simple donation form can be written out or printed from the links under the video, with your Name and Members ID Number to be sent too as we need to know who the donation is to activate.</p>
                    <p class="p1">Send the Administration donation to:</p>
                    <p class="p1"><em>Crowdsourcing Administration</em><br /> <em>423 Smiths Lane</em><br /> <em>West Mifflin Pa. 15122</em></p>
                    <p class="p1">If you wish to proceed with us you will only have 8 days&nbsp;TEMPORARY&nbsp;access to our back office area which contains all team info and updates. It also allows you to track any and all donations towards any crowdfunding you have sent to or are being sent.</p>
                    <p class="p1">(We only&nbsp;FULLY&nbsp;activate accounts when their Administration donations are&nbsp;RECEIVED)</p>
                    <p class="p1">We have crowdfund campaign wheels to track our progress until it becomes time for us to receive crowdfunding donations of our own. This can happen as fast or as slow as the people that are on the crowdfunding campaign with you. If you participate in sharing you will have more people helping you towards whatever goal you had when signing up to get this email.</p>
                    <p class="p1">Whomever it was that sent you to the Cash Crowdfund will guide you through all the various stages and levels of this community. When you feel comfortable you should contact this person and have them place you on an Introductory Crowdfund Campaign.</p>
                    <p class="p1">Your Sponsor will have to either request you to be placed in their campaign or they will do it themselves from their fully functional back office area.</p>
                    <p class="p1">[Note: Contact your&nbsp;Sponsor&nbsp;right away and confirm that you are ready to start your crowdfund projects if you do&nbsp;NOT&nbsp;see any wheel numbers in the back office area]</p>
                    <p class="p1">How it works is pretty simple. You request a crowdfund, your Sponsor places you on their crowdfund campaign wheel and you will donate to the center persons crowdfunding project. Once you have sent the donation there is a button you push that will let the campaign owner know that you have sent it and to be on the lookout for it. (There is also a check box style optionfor members that go&nbsp;GREEN&nbsp;with their campaigns to send a message to the donator that their donation has been received) We ask that either way that you take the time out to use these website tools for both you and the receivers benefit.</p>
                    <p class="p1">The person in the&nbsp;GREEN&nbsp;of the campaign wheel of which you are placed on the OUTSIDE ring (In RED) is where you would send your Crowdfund Donation to on any level. You will be notified via email who this person is for each and every level you decide to join on and their information also appears on the campaign wheel itself for you to use in donating. You only send&nbsp;ONE DONATION PER CROWDFUND LEVEL UNLESS&nbsp;you have invited&nbsp;<em>2 ACTIVATED</em>&nbsp;members and have a campaign that has gone&nbsp;GREEN&nbsp;on that level.</p>
                    <p class="p1">As other crowdfunding members as well as yourself send out links for people to start joining, you will move to the inner rings until you are in the center yourself, once you make it to the center, you become the person whom receives help for your crowdfund project as others come in on the outer ring.</p>
                    <p class="p1">Click on the RULES link and familiarize yourself with (and follow!) the rules of Cash Crowdfund. Then check out the rest of this site at your leisure.</p>
                </CardBody>
            </Card>
        </>
    )
}

export default GettingStarted;